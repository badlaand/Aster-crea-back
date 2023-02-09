import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {

  constructor(@InjectRepository(User)
  private userRepository: Repository<User>,
    private jwtService: JwtService) { }
  async register(createAuthDto: CreateAuthDto) {
    const { pseudo,
      mail,
      password,
      adress,
      postalCode,
      city,
      country, role
    } = createAuthDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.userRepository.create({
      pseudo,
      mail,
      password: hashedPassword,
      adress,
      postalCode,
      city,
      country,
      role

    }); const pseudoExistAlready = await this.userRepository.findBy({
      pseudo,
    });
    const mailExistAlready = await this.userRepository.findBy({
      mail,
    });
    if (pseudoExistAlready.length > 0) {
      throw new BadRequestException('Ce pseudo est déjà utilisé', {
        cause: new Error(),
      })
      return `L'utilisateur existe déja avec ce pseudo:${pseudo}`;
    } else if (mailExistAlready.length > 0) {
      throw new BadRequestException('Cette adresse mail est déjà utilisée', {
        cause: new Error(),
      })
      return `L'utilisateur existe déja avec ce mail:${mail}`;
    }
    if (createAuthDto.mail.length < 4 || createAuthDto.password.length < 4 || createAuthDto.pseudo.length < 4) {
      throw new BadRequestException('Les champs doivent comporter au minimum 4 caractères', {
        cause: new Error(),
      })
    }
    try {
      const createdUser = await this.userRepository.save(user);
      return createdUser;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }

  }
  async login(loginDto: LoginDto) {
    const { mail, password } = loginDto;
    const user = await this.userRepository.findOneBy({ mail });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { mail };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(
        'Ces identifiants ne sont pas bons, déso...',
      );
    }
  }

}

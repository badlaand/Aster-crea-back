import { PartialType } from '@nestjs/mapped-types';
import { CreateGiftCardDto } from './create-gift-card.dto';
import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    IsNumber,
} from 'class-validator'

export class UpdateGiftCardDto extends PartialType(CreateGiftCardDto) {
    @Length(5, 50)
    customer: string;
    // cardNumber: number;
    @IsNumber()
    @IsInt()
    @Min(15, { message: "montant mini 15" })
    @Max(100)
    amount: number
}

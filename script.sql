CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE product (
  id uuid DEFAULT uuid_generate_v4 (),
   PRIMARY KEY (id),
  title VARCHAR (50) NOT NULL,
  category VARCHAR (50) NOT NULL,
  picture VARCHAR () NOT NULL,
  price FLOAT () NOT NULL,
  description VARCHAR () NOT NULL,
customable VARCHAR () NOT NULL,
  user_id uuid,
CONSTRAINT fk_user FOREIGN KEY (userId) 
REFERENCES user(id)
);
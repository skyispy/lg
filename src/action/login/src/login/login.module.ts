import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([User]), JwtModule.register({secret: "mykey"})],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}

import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}

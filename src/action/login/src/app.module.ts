import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { SequelizeModule } from '@nestjs/sequelize';
import * as cookie from 'cookie-parser';

@Module({
  imports: [LoginModule, SignupModule, SequelizeModule.forRoot({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "5835",
    database: "mypage",
    autoLoadModels: true,
    synchronize: true,
    sync: {force: false}
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookie()).forRoutes("*");
  }
}

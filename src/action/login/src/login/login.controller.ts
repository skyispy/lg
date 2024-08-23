import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('')
  async login(@Body() loginRequest, @Res() res: Response) {
    const success = await this.loginService.loginSign(loginRequest);
    if(success) {
      const token = this.loginService.signToken(loginRequest.uid, loginRequest.upw);
      const date = new Date();
      const cookieDate = new Date(date.setMinutes(date.getMinutes() + 5));
      res.cookie("accessToken", token, {httpOnly: true, expires: cookieDate});
      return res.send({success, token});
    }else {
      
      return res.send({success});
    }
  }
}

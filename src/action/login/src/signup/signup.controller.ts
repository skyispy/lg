import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post('')
  async signup(@Body() signUpRequest) {
    console.log(signUpRequest)
    return await this.signupService.createSign(signUpRequest);
  }
}

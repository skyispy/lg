import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Injectable()
export class SignupService {
    constructor(@InjectModel(User) private readonly userModel: typeof User) {}

    async createSign(userDTO) {
        try {
          const {uid, upw, nickName} = await userDTO;
          await this.userModel.create({
              uid, upw, nickName
          });
        } catch (error) {
         console.log("실패")
        }
    }
}

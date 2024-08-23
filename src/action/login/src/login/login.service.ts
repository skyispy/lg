import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Injectable()
export class LoginService {
    constructor(@InjectModel(User) private readonly userModel: typeof User,
        private readonly jwt: JwtService
    ) {}

    async loginSign(inputData) {
        try {
            const {uid, upw} = await inputData;
            const user = await this.userModel.findOne({where: {uid}});
            if(upw === user.upw) {
                return true;
            }else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    async signToken(uid, nickName) {
        const payload = {uid, nickName}
        return this.jwt.sign(payload, {expiresIn: 1000 * 60 * 30});
    }
}

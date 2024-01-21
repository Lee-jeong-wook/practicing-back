import { TokenExpiredError } from "jsonwebtoken";
import { UserToken } from "../interfaces/UserToken";
import dotenv from "dotenv";
const jwt = require('jsonwebtoken');
dotenv.config();

class TokenModel {
    verify(data: string|undefined):string{
        try {      
            if (!data) {
              return "Token doesn't exist";
            }
        
            const jwtDecoded: any = jwt.verify(data, process.env.JWT_SECRET);
            // console.log('jwtDecoded');
            return jwtDecoded;
          }
          
          // 인증 실패 
          catch(error) {
            if (error instanceof TokenExpiredError) {
              return "Token expired";
            }
            return ""
          }
    }
    access(data: UserToken){
        const token = jwt.sign({
            id : data.id, 
            isAdmin : data.isAdmin, 
        }, process.env.JWT_SECRET, {
            expiresIn: '1m', //1분
            issuer: '토큰 발급자'
        });
        return token;
    }
    refresh(data: UserToken){
        const token = jwt.sign({
            id : data.id, 
            isAdmin : data.isAdmin, 
        }, process.env.JWT_SECRET, {
            expiresIn: '3h',
            issuer: '토큰 발급자'
        });
        const accessToken = this.access(data);
        return [token, accessToken];
    }
}

export default TokenModel;
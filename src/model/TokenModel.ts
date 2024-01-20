import { TokenExpiredError } from "jsonwebtoken";
import { UserToken } from "../interfaces/UserToken";
const jwt = require('jsonwebtoken');

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
        const accessToken = jwt.sign()
    }
    refresh(data: UserToken){

    }
}

export default TokenModel;
import { Request, Response, NextFunction } from "express";
import { UserToken } from "../interfaces/UserToken";
import dotenv from 'dotenv';
import { TokenExpiredError } from "jsonwebtoken";
import TokenModel from "../model/TokenModel";
dotenv.config();

const jwt = require('jsonwebtoken');

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // 인증 완료
  try {
    const userToken = req.headers.authorization;
    // console.log(userToken);
    // console.log(userToken);

    // if (!userToken) {
    //   throw new Error('권한 없음');
    // }

    // const jwtDecoded: any = jwt.verify(userToken, process.env.JWT_SECRET);
    // console.log(jwtDecoded);
    const tokenModel = new TokenModel();
    const response = tokenModel.verify(userToken);
    console.log(response);
    return next();
  }
  
  // 인증 실패 
  catch(error) {
    if (error instanceof TokenExpiredError) {
      return res.status(419).json({
        code: 419,
        message: '토큰이 만료되었습니다.'
      });
    }
    return res.status(401).json({
      code: 401,
      message: '유효하지 않은 토큰입니다.'
    });
  }
}

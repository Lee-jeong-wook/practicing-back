import { Request, Response, NextFunction } from "express";
import { UserToken } from "../interfaces/UserToken";

const jwt = require('jsonwebtoken');

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // 인증 완료
  try {
    const userToken = req.headers.Authorization;
    console.log(userToken);

    if (!userToken) {
      throw new Error('권한 없음');
    }

    const jwtDecoded: any = jwt.verify(userToken, process.env.JWT_SECRET);
    console.log(jwtDecoded);
    return next();
  }
  
  // 인증 실패 
  catch(error) {
    if (error instanceof Error && error.name === 'TokenExpireError') {
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

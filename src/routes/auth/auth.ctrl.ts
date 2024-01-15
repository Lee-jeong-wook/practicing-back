import { Request, Response} from "express"; 
import {verifyToken} from '../../middleware/middleware';
const jwt = require('jsonwebtoken');

const post = {
    postFunc: async (req: Request, res: Response) => {
        try {
            const id = 'vappet'
            const nick = 'hodoopapa'
            // jwt.sign() 메소드: 토큰 발급 
            console.log('hi');
            const token = jwt.sign({
                id, 
                nick, 
            }, process.env.JWT_SECRET, {
                expiresIn: '1m', //1분
                issuer: '토큰 발급자'
            });
            return res.json({
                code: 200,
                message: '토큰이 발급되었습니다.',
                token,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                code: 500,
                message: '서버 에러',
            });  
        }
    },
}

module.exports= {
    post
};
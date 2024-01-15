"use strict"
import { Router } from "express";
import { verifyToken } from "../../middleware/middleware";

//컨트롤러에서 post, get 방식으로 처리할 데이터들 불러옴
const ctrl = require('./auth.ctrl');

const authRouter = Router();

//get은 ctrl 뒤에 output, post는 post를 붙임
authRouter.post('/login',verifyToken, ctrl.post.postFunc);

module.exports= authRouter;
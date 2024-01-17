"use strict"
import { Router } from "express";
import { verifyToken } from "../../middleware/middleware";

//컨트롤러에서 post, get 방식으로 처리할 데이터들 불러옴
const ctrl = require('./home.ctrl');

const router = Router();

//get은 ctrl 뒤에 output, post는 post를 붙임
router.get('/home', verifyToken,ctrl.output.home);

module.exports= router;
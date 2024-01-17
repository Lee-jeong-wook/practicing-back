import { Request, Response} from "express"; 

//get 방식으로 처리하는 코드들
const output = {
    home: async (req:Request, res: Response) => {
        res.send("환영합니다");
    }
}

//post 방식으로 req, res 처리하는 코드들
const post = {
    // postFunc: async (req: Request, res: Response) => {
    //     req
    // },
}

module.exports= {
    output,
    post
};
import { Request, Response} from "express"; 

//get 방식으로 처리하는 코드들
const output = {
    getFunc: async (req:Request, res: Response) => {

    }
}

//post 방식으로 req, res 처리하는 코드들
const post = {
    postFunc: async (req: Request, res: Response) => {

    },
}

module.exports= {
    output,
    post
};
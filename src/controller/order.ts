import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handel';
import { RequestExt } from '../interfaces/req-ext'



const getItems = (req: RequestExt, res: Response) =>{
        try{
            res.send({
                data: " Seccion con jwt ",
                user: req.user,
            });
    }catch(e){
        handleHttp(res, 'ERROR GET ORDER')        
    }
}


export{ getItems };
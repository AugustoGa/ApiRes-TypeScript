import { Request, Response } from 'express';
import dbConnect from '../config/mongo';
import { handleHttp } from '../utils/error.handel';
import { registerUpload } from '../service/storage';
import { RequestExt } from '../interfaces/req-ext';
import { Storage } from '../interfaces/storage';

const getFile = async (req: RequestExt, res: Response)=>{
    try{
        const {user , file} = req;
        console.log(file);
        const dataToRegister: Storage= {
            fileName: `${file ?.filename}`,
            idUser : `${user?.id}`,
            path : `${file?.path}`,
        }
        const response = await registerUpload(dataToRegister);
        res.send(response);
    }catch(e){
        handleHttp(res , " Error Get Blog");
    }
};

export { getFile };
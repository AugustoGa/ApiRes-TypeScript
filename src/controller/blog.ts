import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handel';

const getItem = (req: Request, res: Response) =>{
    try{
    }catch(e){
        handleHttp(res, 'ERROR GET BLOG')
    }
}

const getItems = (req: Request, res: Response) =>{
        try{

    }catch(e){
        handleHttp(res, 'ERROR GET BLOG')        
    }
}

const updateItem = (req: Request, res: Response) =>{
    try{

    }catch(e){
        handleHttp(res, 'ERROR UPDATE BLOG')       
    }
}

const postItem = (req: Request, res: Response) =>{
    try{
        
    }catch(e){
        handleHttp(res, 'ERROR POST BLOG')       
    }
}

const deleteItem = (req: Request, res: Response) =>{
    try{

    }catch(e){
        handleHttp(res, 'ERROR DELETE BLOG')           
    }
}

export{ getItem , getItems , updateItem , postItem , deleteItem };
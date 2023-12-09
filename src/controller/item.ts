import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handel';

const getItem = (req: Request, res: Response) =>{
    try{
    }catch(e){
        handleHttp(res, 'ERROR GET ITEM')
    }
}

const getItems = (req: Request, res: Response) =>{
        try{

    }catch(e){
        handleHttp(res, 'ERROR GET ITEMS')        
    }
}

const updateItem = (req: Request, res: Response) =>{
    try{

    }catch(e){
        handleHttp(res, 'ERROR UPDATE ITEM')       
    }
}

const postItem = (req: Request, res: Response) =>{
    try{

    }catch(e){
        handleHttp(res, 'ERROR POST ITEM')       
    }
}

const deleteItem = (req: Request, res: Response) =>{
    try{

    }catch(e){
        handleHttp(res, 'ERROR DELETE ITEM')           
    }
}

export{ getItem , getItems , updateItem , postItem , deleteItem };
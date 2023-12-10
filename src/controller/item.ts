import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handel';
import { deleteCar, getCar, getCars, intertCars, updateCar } from '../service/item';

const getItem =  async({ params } : Request, res: Response) =>{ //El id sera lo que se consiga por una req.params
    try{
        const {id} = params; 
        const response = await getCar(id);
        const data = response ? response : 'Not Found';
        res.send(data);
    }catch(e){
        handleHttp(res, 'ERROR GET ITEM' , e)
    }
}

const getItems = async (req: Request, res: Response) =>{
        try{
            const response = await getCars();
            const data = response ? response : 'Not Found Items';
            res.send(data);
    }catch(e){
        handleHttp(res, 'ERROR GET ITEMS')        
    }
}

const updateItem = async ({params , body}: Request, res: Response) =>{
    try{
        const {id} = params;
        const response = await updateCar(id , body);
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR UPDATE ITEM')       
    }
}

const postItem = async ({ body} : Request, res: Response) =>{
    try{
        const responseItem = await intertCars(body);
        res.send(responseItem);
    }catch(e){
        handleHttp(res, 'ERROR POST ITEM' , e)       
    }
}

const deleteItem = async ({params}: Request, res: Response) =>{
    try{
        const {id} = params;
        const response = await deleteCar(id);
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR DELETE ITEM')           
    }
}

export{ getItem , getItems , updateItem , postItem , deleteItem };
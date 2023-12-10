import { Request, Response } from "express";
import { registerNewUser , loginUser } from "../service/auth";

const registerCtrl = async ({body}: Request , res: Response) =>{
    const responseUser = await registerNewUser(body);
    res.send(responseUser);

};

const loginCtrl = async ({body}: Request , res: Response) =>{
    const { email , password } = body;
    const responseUser = await loginUser({ email , password });
    res.send(responseUser);
    
};

export { registerCtrl , loginCtrl };
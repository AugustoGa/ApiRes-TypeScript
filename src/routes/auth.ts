import { Router } from "express";
import { registerCtrl , loginCtrl } from "../controller/auth";


const router = Router();

/**http://localhost:3002/auth/register [POST] */

router.post('/register', registerCtrl);

router.post('/login', loginCtrl);




export{router};
import { Router } from "express";
import { getItems } from "../controller/order";
import { checkJwt } from "../middleware/session";

//Ruta solo para personas con seession activa, que tengan el jwt valido!

const router = Router();

router.get('/', checkJwt, getItems);

export {router};
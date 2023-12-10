import { Router } from "express";
import { getFile } from "../controller/upload";
import { checkJwt } from "../middleware/session";
import multerMiddleware from "../middleware/file";
//Ruta solo para personas con seession activa, que tengan el jwt valido!

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile); // single() optener un unico archivo


export {router};
import { Router } from "express";
import { Request, Response } from 'express';
import { getItem, postItem } from "../controller/item";


const router = Router();

router.get('/', getItem);
router.get('/:id', getItem);

router.post('/', postItem);



export{router};
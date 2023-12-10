import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controller/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/:id', getItem);

router.get('/', getItems);

router.post('/', postItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);



export{router};
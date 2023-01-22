import {Router} from "express";
import { deleteItem, getItem, getItems, posItem, updateItem } from "../controllers/item";
import logMiddleware from "../middleware/log";

const router = Router();

router.get('/', getItems);
router.get('/:id',logMiddleware, getItem);
router.post('/', posItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export {router};
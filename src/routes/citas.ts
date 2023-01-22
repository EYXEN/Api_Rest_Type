import { Router } from "express";
import { getItems } from "../controllers/cita";
import { checkJwt } from "../middleware/session";

/**
 * 
 * Esta ruta esta protegida, Tiene que tener una session activa
 * Es decir que tenga un jwt valido
 */
const router = Router();

router.get('/',checkJwt,getItems)

export {router};
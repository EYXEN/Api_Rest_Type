import { NextFunction,Request,Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";


const checkJwt = (req:RequestExt, res:Response,next:NextFunction) =>{

    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop() // Bearer Ae2fQf4fg ['Bearer','Ae2fQf4fg'] va obtener el ultimo elemento     
        const isUser = verifyToken(`${jwt}`) as { id: string }; // se coloca en comillas para evitar el error de tipado 
        if(!isUser){
            res.status(401);
            res.send("NO_TIENES_JWT_VALIDO");
        }else{
            req.user = isUser;
            next();
        }
        
        
    } catch (e) {
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
}

export {checkJwt};
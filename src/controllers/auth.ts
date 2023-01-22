import { Request, Response } from "express";
import { registerNewUser,loginUser } from "../services/auth.services";

const registerCtrl = async ({body}:Request,res:Response) =>{
    const ResponseUser = await registerNewUser(body);
    res.send(ResponseUser);
}

const loginCtrl = async ({body}:Request,res:Response) =>{
    const {email, password} = body;
    const ResponseUser = await loginUser({email, password});
    
    if(ResponseUser === "PASSWORD_INCORRECTO"){
        res.status(403)
        res.send(ResponseUser);
    }else{
        res.send(ResponseUser);
    }
}

export {loginCtrl,registerCtrl};
import { Request,Response } from "express"
import { RequestExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle"



const getItems = ( req:RequestExt, res:Response ) =>{
    try {
        res.send({
            
            data:"Solo se puede ver con un jwt activo",
            user:req.user,
        })
        
    } catch (e) {
        handleHttp(res,"ERROR GET BLOG")
        
    }
    
}


export {getItems};
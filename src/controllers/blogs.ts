import { Request,Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req:Request,res:Response) =>{
    try {
        
    } catch (e) {
        handleHttp(res,"ERROR GET BLOG")
        
    }

}

const getItems = (req:Request,res:Response) =>{
    try {
        
    } catch (e) {
        handleHttp(res,"ERROR GET BLOG")
        
    }
    
}

const updateItem = (req:Request,res:Response) =>{
    try {
        
    } catch (e) {
        handleHttp(res,"ERROR UPDATE BLOG")
        
    }
    
}

const posItem = ({body}:Request,res:Response) =>{
    try {
        res.send(body)
        
    } catch (e) {
        handleHttp(res,"ERROR POS BLOG")
        
    }
    
}

const deleteItem = (req:Request,res:Response) =>{
    try {
        
    } catch (e) {
        handleHttp(res,"ERROR DELETE BLOG")
        
    }
    
}

export {getItem,getItems,updateItem,deleteItem,posItem};
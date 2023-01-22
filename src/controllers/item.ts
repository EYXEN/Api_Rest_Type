import { Request,Response } from "express"
import { deleteCar, getCar, getCars, insertItem, updateCar } from "../services/item"
import { handleHttp } from "../utils/error.handle"

const getItem = async({params}:Request,res:Response) =>{
    try {
        const {id} = params
        const response = await getCar(id);
        const data = response ? response: "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHttp(res,"ERROR GET ITEM")
        
    }

}

const getItems = async (req:Request,res:Response) =>{
    try {
        const response = await getCars();
        res.send(response);
        
    } catch (e) {
        handleHttp(res,"ERROR GET ITEMS")
        
    }
    
}

const updateItem = async({params,body}:Request,res:Response) =>{
    try {
        const { id } = params;
        const response = await updateCar(id, body);
        res.send(response);
        
    } catch (e) {
        handleHttp(res,"ERROR UPDATE ITEM")
        
    }
    
}

const posItem = async ({body}:Request,res:Response) =>{
    try {
        const ResponseItem = await insertItem(body)
        res.send(ResponseItem);
        
    } catch (e) {
        handleHttp(res,"ERROR POS ITEM",e)
        
    }
    
}

const deleteItem = async({params}:Request,res:Response) =>{
    try {
        const {id} = params
        const response = await deleteCar(id);
        res.send(response);
        
    } catch (e) {
        handleHttp(res,"ERROR DELETE ITEM")
        
    }
    
}

export {getItem,getItems,updateItem,deleteItem,posItem};
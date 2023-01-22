import ItemModel from "../models/item"



const getCitas = async () =>{
    const responseItem = await ItemModel.find({});
    return responseItem;
}



export{getCitas};
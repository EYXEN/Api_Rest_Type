import {Schema,Types,model,Model} from "mongoose";
import { User } from "../interfaces/user.interfaces";


const UserSchema = new Schema<User>(
    {
        name:{
            required:true,
            type:String,
        },
        password:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        descrption:{
            type:String,
            default:"hola descriptions"
        },

    },
    {
        versionKey:false,
        timestamps:true,
    }
    
);

const UserModel = model('users', UserSchema);

export default UserModel;
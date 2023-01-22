import { Auth } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/user.interfaces";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";


const registerNewUser = async ({email,password,name}:User) =>{
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "ALREADY_USER"
    const passHash = await encrypt(password)

    const registerNewUser = await UserModel.create({
        email,
        password:passHash,
        name
    });

    return registerNewUser;

}

const loginUser = async ({email,password}:Auth) =>{

    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password,passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECTO";

    const tokenGen = generateToken(checkIs.email);

    const data = {
        tokenGen,
        user:checkIs,
    }
    return data;

}

export {registerNewUser,loginUser};
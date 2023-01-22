import { sign,verify } from "jsonwebtoken" 

const JWT_SECRETS = process.env.JWT_SECRET || "contra123";

const generateToken = (id:string) =>{
    const jwt = sign({id},JWT_SECRETS,{
        expiresIn:"2h",
    });
    return jwt;

}

const verifyToken = (jwt:string) =>{

    const isOk = verify(jwt,JWT_SECRETS);
    return isOk
}

export {generateToken, verifyToken};
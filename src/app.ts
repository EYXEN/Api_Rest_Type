import  Express, { json }  from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes/index";
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(router);
dbConnect().then(()=>console.log("Conexion a la DB CORRECTA!"))

app.listen(PORT, ()=> console.log(`listening through the port ${PORT}`))
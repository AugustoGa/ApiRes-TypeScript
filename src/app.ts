import express from "express"
import cors from "cors"
import "dotenv/config"
import { router } from "./routes"
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = express()
app.use(express.json());
app.use(cors()) //Indicamos a la appi que puede ser consumida por cualquier origen 
app.use(router);
db().then(()=> console.log("Conecion Ready"));






app.listen(PORT,()=>( 
    console.log(`SERVER LISTENING ${PORT}`) 
))



import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";


export async function connectDB(){
    try{
        await mongoose.connect(DB_URL);
        console.log("Connected to the MongoDB");


    }catch(error){
        console.log("Something went wrong in connection to the DB");
        console.log(error);

    }
}

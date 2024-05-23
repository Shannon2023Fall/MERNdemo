//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config(); 
import { MongoClient, ServerApiVersion } from "mongodb";
import { version } from "mongoose";

const url = process.env.MONGODB_URL || "mongodb://localhost:27017/";

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
};

let client;

const getConnectedClient = () => {
    if(client){
        return client;
    } else {
         throw new Error("Not connected to MongoDB. Please call connectToMongoDB")
     }
 };

export default getConnectedClient;

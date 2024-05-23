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
const connectToMongoDB = async () => {
    if (!client) {
        try {
            client = await MongoClient.connect(url, options);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.log(error);
        }
    }
    return client;
};

// const getConnectedClient = () => {
//     if(client){
//         return client;
//     } else {
//         throw new Error("Not connected to MongoDB. Please call connectToMongoDB")
//     }
// };

export default connectToMongoDB;

//module.exports = {connectToMongoDB, getConnectedClient};

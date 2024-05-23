import express from "express";
// import events router
import router from "./routes.js"; 
//import {} from "dotenv/config";
import dotenv from "dotenv";
dotenv.config(); 
import connectToMongoDB from "./database.js";

const app = express();
//const router = require("./routes2");

// enable CORS (Cross-Origin Resource Sharing); allow requests from any origin "*" and allow CRUD;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// use /api to prefix endpoints
app.use("/api", router); 

// app.get("/hello", (req, res) => {
//     res.status(200).json({message: "hello"});
// });

const port = process.env.PORT || 7000;

const startServer = async () => {
    await connectToMongoDB();
    app.listen(port, () => {
        //console.log('Server is listening on http://localhost:${port}');
        console.log('Server is listening on http://localhost:7000');
    });
};

startServer();

// http://localhost:7000
// npm run dev after scripts, to start the server in Development
// npm start to deploy

// after Build in routes http://localhost:7000/api/events
// make the Server is RUNING when testing with Postman extension

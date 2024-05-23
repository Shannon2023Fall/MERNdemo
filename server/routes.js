import express from 'express';
import getCollection from "./models/model.js"; 

const router = express.Router();

// READ = Get
// Status Codes: 200 OK, 206 Partial Content, 300 Multiple Choices, 308 Permanent Redirect, 304 Not Modified, 307 Temporary Redirect;
router.get("/events", async(req, res) => {
    const collection = getCollection();
    const events = await collection.find({}).toArray();

    res.status(200).json(events);
    //res.status(200).json({message: "Get Request to /api/events"});
});

// CREATE = Post
// Status Codes: 201 Created, 202 Accepted, 303 See Other; 
router.post("/events", async(req, res) => {
    const collection = getCollection();
    const {event} = req.body;

    const newEvent = await collection.insertOne({event, status:false});

    res.status(201).json({event, status:false, _id: newEvent.insertedId});
    //res.status(201).json({message: "Post Request to /api/events"});
});

// DELETE = Delete
// Status Codes: 204 No Content; 
router.delete("/events/:id", (req, res) => {
    res.status(200).json({message: "Delete Request to api/events:id"});
});

// UPDATE = Put
// Status Codes same as Delete; 
router.put("/events/:id", (req, res) => {
    res.status(200).json({message: "Put Request to /api/events:id"});
});

//module.exports = router; 
export default router;

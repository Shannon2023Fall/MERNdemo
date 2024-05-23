import getConnectedClient from "../getUser.js"; //./getUser

const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("evensDB").collection("events");
    return collection;
};

export default getCollection;

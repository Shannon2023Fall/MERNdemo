import { useEffect, useState } from "react";

export default function App() {

  const [message, setMessage] = useState("");

useEffect(() => {

  //Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.
  const getEvents = async () => {

    //The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.
    const res = await fetch("http://localhost:7000/api/events");
    const events = await res.json();

    //console.log(events);
    setMessage(events.message);
  };
  getEvents();
}, [])

  return (
    <main className="container">
      <h1>EScooter Accidents</h1>
      {message && <p>{message}</p>}
    </main>
  );
}

// open Inspect of the react page, console giving Error on Port difference -> use proxy in package.json;

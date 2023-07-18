import React, { useState, useEffect } from "react";

function App() {
  const [serverMessage, setServerMessage] = useState("");

  let [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("/api/dev")
      .then((res) => res.json())
      .then((data) => setServerMessage(data.body));
  }, []);

  useEffect(() => {
    fetch("/api/dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: number }),
    })
      .then((res) => res.json())
      .then((data) => setServerMessage(data.body));
  }, [number]);

  function changeHandler(e) {
    if (e.target.value) {
      setNumber(parseInt(e.target.value));
    } else {
      setNumber(0);
    }
  }

  return (
    <div>
      <h1>Client: </h1>
      <h3>Hello from client!</h3>
      <br />
      <h1>Server: </h1>
      <h3>{serverMessage}</h3>
      <br />
      <br />
      <br />
      <input type="text" placeholder={number} onChange={changeHandler} />
    </div>
  );
}

export default App;

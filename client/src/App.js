import React, { useState, useEffect, createRef } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/dev")
      .then((res) => res.json())
      .then((data) => setMessage(data.body));
  }, []);

  let inputRef = createRef();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: inputRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.body));
  }

  return (
    <div>
      <h1>Hello from client!</h1>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text"></input>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default App;

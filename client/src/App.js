import React, { useState, useEffect } from "react";

function App() {
  const [content, setContent] = useState("Loading..");

  useEffect(() => {
    fetch("/api/dev")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div>
      <h1>Hello from client!</h1>
      <h1>{content}</h1>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [stuff, setStuff] = useState("Hello!");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStuff(data.content));
  }, []);

  return <div>{stuff}</div>;
}

export default App;

//Services
const express = require("express");

//Variables
const app = express();
const port = process.env.PORT || 8080;

//Functions

//Main

app.listen(port, () => {
  // Starts the server on the specified port.
  console.log(
    `Server is active on \x1b[34;4;1mhttp://localhost:${port}/\x1b[0m`
  );
});

//Routing
app.get("/api", (req, res) => {
  res.json({ content: "Test" });
});

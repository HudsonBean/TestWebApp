//Services
const express = require("express");

//Variables
const app = express();
const PORT = process.env.PORT || 8080;
let n = 0;

//Functions

//Main

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is active at \x1b[34;1;4mhttp://localhost:${PORT}/\x1b[0m`
  );
});

// Routing
// Get
app.get("/api/dev", (req, res) => {
  res.status(200).json({ body: `Hello from server! Current number: ${n}` });
});
// Post
app.post("/api/dev", (req, res) => {
  if (req.body) {
    n = req.body;
    res.status(200).json({ body: `Hello from server! Current number: ${n}` });
  }
});

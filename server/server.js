//Services
const express = require("express");
const cors = require("cors");

//Variables
const app = express();
const PORT = process.env.PORT || 8080;
let n = 0;

//Functions

//Main

//Middleware
app.use(express.json());
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is active at \x1b[34;1;4mhttp://localhost:${PORT}/\x1b[0m`
  );
});

// Routing
// Get
app.get("/api/dev", (req, res) => {
  res.status(200).json({ body: `Hello from server! Current Number: ${n}` });
});
// Post
app.post("/api/dev", (req, res) => {
  if (req.body) {
    n = req.body.content;
    res.status(200).json({ body: `Hello from server! Current number: ${n}` });
  }
});

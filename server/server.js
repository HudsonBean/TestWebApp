//Services
const express = require("express");

//Variables
const APP = express();
const PORT = process.env.PORT || 8080;

//Function

// Start server
APP.listen(PORT, () => {
  console.log(
    `Server is active at \x1b[34;1;4mhttp://localhost:${PORT}/\x1b[0m`
  );
});

// Routing
APP.get("/api/dev", (req, res) => {
  console.log(req.content);
  res.status(200).json({ body: "Hello from server!" });
});

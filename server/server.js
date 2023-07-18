//Services
const express = require("express");
const bodyParser = require("body-parser");
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
  res.status(200).json({ body: `"Hello!" -Server` });
});

APP.post("/api/dev", bodyParser.json(), (req, res) => {
  let message = '"' + req.body.content + '"' + " -Server";
  if (!req.body.content) {
    res.status(400).json({ body: "An error has occured! :(" });
  } else {
    res.status(202).json({ body: message });
  }
});

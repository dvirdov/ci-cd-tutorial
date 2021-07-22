const express = require("express");
const app = express();
// app.use(express.json());

app.get("/:request", (req, res) => {
  res.send(req.params.request);
});

app.listen(3000);
console.log("3000");

const { response } = require("express");
const express = require("express");
const app = express();
const port = 5000;
var request = require("request");

// app.get("/", (req, res) => {
//   request("http://www.google.com", function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body);
//     }
//   });
// });

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const { v4: uuidv4 } = require("uuid");
const express = require("express");
const logger = require("morgan")

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/public/index.html")
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
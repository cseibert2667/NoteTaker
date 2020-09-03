const { v4: uuidv4 } = require("uuid");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const fs = require("fs");

let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"))

app.get("/notes", function(req,res){
  res.sendFile(path.join(__dirname + "/public/notes.html"))
})

app.get("*", function (req,res) {
    res.sendFile(__dirname + "/public/index.html")
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
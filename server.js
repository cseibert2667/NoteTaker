const { v4: uuidv4 } = require("uuid");
const express = require("express");
const logger = require("morgan")

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
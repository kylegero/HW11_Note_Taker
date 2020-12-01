const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 9999

let theNotes = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
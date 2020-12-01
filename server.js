const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 9999

let theNotes = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(patht.join(__dirname, "Develop/public")));

app.get("api/notes", function(err, res) {
    try {
        
    }
})
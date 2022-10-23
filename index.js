const express = require("express");
const { readFile } = require("fs");

const app = express();

// promises also possible
app.get("/", (request, response) => {
    readFile("./home.html", "utf-8", (err, html) => {
        if (err) {
            response.status(500).send("sorry");
        }
        response.send(html);
    });
});

app.listen(3000, () => console.log("App avaible on http://localhost:3000"));
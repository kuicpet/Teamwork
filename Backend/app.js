const express = require('express');

const app = express();


app.get("/", (request, response) => {
    response.status(200).send({
        message: "Your request was a success!"
    });
});

app.get("/test", (request, response) => {
    response.status(500).send({ "message": "This is an error response" });
});

module.exports = app;
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
/*
app.get('/',(req, res, next)=>{
    res.status(200).send({message:'Your request was a Success!'});
    next();
});
app.get('/test',(req, res, next) =>{
    res.status(500).send({message:'This is an Error Message'});
    next();
});
app.use((req, res, next)=>{
    res.json({message :'Your request was successful!'});
    next();
});
app.use((req, res,next)=>{
    console.log('Response sent successfully!');
});*/


module.exports = app;
const express = require('express');

const app = express();

app.use((req, res,next)=>{
    console.log('Request received');
    next();
});
app.use((req, res)=>{
    res.json({message :'Your request was successful!'});
});



module.exports = app;
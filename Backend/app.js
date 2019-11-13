const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post("/auth/create-user",(request, response, next) =>{
    const data = [
        {
            'firstName': String,
            'lastName': String,
            'email': String,
            'password': String,
            'gender': String,
            'jobRole': String,
            'department': String,
            'address': String,
        },
    ]
    response.status(201).send({
        'status': 'success',
        'data' : {
            'message': 'User account successfully created',
            'token': 'String',
            'userId': 'Interger'
        }
    });
    next();
});
  app.post("/auth/signin",(resquest, response, next) =>{
      
  })

app.get("/", (request, response, next) => {
    response.status(200).send({
        message: "Your request was a success!"
    });
    next();
});

app.get("/test", (request, response, next) => {
    response.status(500).send({ "message": "This is an error response" });
    next();
});





module.exports = app;
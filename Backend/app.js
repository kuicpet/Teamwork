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

/*Create user account*/
app.post("/auth/create-user",(request, response, next) =>{
    request.body =
        {
            "firstName": "String",
            "lastName": "String",
            "email": "String",
            "password": "String",
            "gender": "String",
            "jobRole": "String",
            "department": "String",
            "address": "String"
        },
    response.status(201).send({
        "status": "success",
        "data" : {
            "message": "User account successfully created",
            "token": "String",
            "userId": "Interger"
        }
    });
    next();
});

/*Login a user*/
app.post("/auth/signin",(request, response, next) => {
     request.body = 
          {
            "email": "String",
            "password": "String",  
          }
      response.status(202).send({
        "status" : 'success',
        "data" : {
        "token" : "String",
        "userId": "Integer"
        }
      });
      next();
});

/*Create a gif*/
app.post("/gifs",(request, response, next) => {
    request.header = {"token":"String"},
    request.body = {
        "image": "image/gif",
        "title": "String"
    }
    response.status(202).send({
        "status" : "success",
        "data" : {
        "gifId" : "Integer",
        "message" : "GIF image successfully posted",
        "createdOn" : "DateTime",
        "title" : "String",
        "imageUrl" : "String",
        } 
    });
    next();
});

/*Create an article*/
app.post("/articles",(request,response, next) => {
    request.header = {
        "token": "String"
    };
    request.body = {
        "title": "String",
        "article": "String",
    };
    response.status(202).send({
        "status" : "success",
        "data" : {
        "message" : "Article successfully posted",
        "articleId" : "Integer",
        "createdOn" : "DateTime",
        "title" : "String"
        }
    });
    next();
});

/*Edit an article*/
app.patch("/articles/articleId",(request,response, next) => {
      request.header = {
        "token": "String",
      };
      request.body = {
        "title": "String",
        "article": "String"
      };
      response.status(202).send({
        "status" : "success",
        "data" : {
        "message" : "Article successfully updated",
        "title" : "String",
        "article" : "String"
        }
      });
      next();
});

/*Employees can delete their articles*/
app.delete("/articles/articleId",(request, response, next) => {
    request.header = {
        "token": "String"
    };
    response.status(202).send({
        "status" : "success",
        "data" : {
        "message": "Article successfully deleted"
        }
    });
    next();
});

/*Employees can delete their gifs*/
app.delete("/gifs/gifId",(request, response, next) => {
    request.header = {
        "token": "String"
    };
    response.status(204).send({
        "status" : "success",
        "data" : {
        "message": "gif post successfully deleted"
        }
    });
    next();
});

/*Employees can comment on other colleagues' article post*/
app.post("/articles/articleId/comment",(request, response, next) => {
    request.header = {
        "token": "String",
    };
    request.body = {
        "comment": "String"
    };
    response.status(201).send({
        "status" : "success",
        "data" : {
        "message": "Comment successfully created",
        "createdOn": "DateTime",
        "articleTitle": "String",
        "article": "String",
        "comment": "String",
        }
    });
    next();
});

/*Employees can comment on other colleagues' gif post*/
app.post("/gifs/gifId/comment",(request, response, next) => {
    request.header = {
        "token": "String"
    };
    request.body = {
        "comment":"String"
    };
    response.status(201).send({
        "status" : "success",
        "data" : {
        "message": "comment successfully created",
        "createdOn": "DateTime",
        "gifTitle": "String",
        "comment": "String"
        }
    });
    next();
});

/*Employees can view all articles or gifs, showing the most recently posted articles
or gifs first*/
app.get("/feed",(request, response, next) => {
    request.header = {
        "token": "String"
        };
    response.status(200).send({
        "status" : "success",
        "data" : [
        {
        "id": "Integer",
        "createdOn": "DateTime",
        "title": "String",
        "article/url": "String", //use url for gif post and article for articles
        "authorId" : "Integer",
        }, 
        {
        "id": "Integer",
        "createdOn": "DateTime",
        "title": "String",
        "article/url": "String", //use url for gif post and article for articles
        "authorId" : "Integer",
        }, 
        {
        "id": "Integer",
        "createdOn": "DateTime",
        "title": "String",
        "article/url": "String", //use url for gif post and article for articles
        "authorId" : "Integer",
        }
    ]
    });
    next();
});

/*Employees can view a specific article.*/
app.get("/articles/articleId",(request, response, next) => {
    request.header = {"token": "String"};
    response.status(200).send({
        "status" : "success",
        "data" : {
        "id": "Integer",
        "createdOn": "DateTime",
        "title": "String",
        "article": "String",
        "comments": [
            {
            "commentId": "Integer",
            "comment": "String",
            "authorId" : "Integer",
            },
            {
            "commentId": "Integer",
            "comment": "String",
            "authorId" : "Integer",
            },
          ]
        }
    });
    next();
});

/*Employees can view a specific gif post*/
app.get("/gifs/gifId",(request, response, next) => {
    request.header = {"token":"String"};
    response.status(200).send({
        "status" : "success",
        "data" : {
        "id": "Integer",
        "createdOn": "DateTime",
        "title": "String",
        "url": "String",
        "comments": [
            {
            "commentId": "Integer",
            "authorId": "Integer",
            "comment": "String",
            },
            {
            "commentId": "Integer",
            "useauthorIdrId": "Integer",
            "comment": "String",
            }
          ]
        }
    });
    next();
});

app.get("/", (request, response, next) => {
    request.header = {};
    request.body = {};
    response.status(200).send({
        "message": "Your request was a success!"
    });
    next();
});

app.get("/test", (request, response, next) => {
    response.status(500).send({ "message": "This is an error response" });
    next();
});





module.exports = app;
CREATE TABLE teamusers (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(255),
    jobRole VARCHAR(255),
    department VARCHAR(255),
    address VARCHAR(255)
    );

CREATE TABLE gifs (
    gifId SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL
    );

CREATE TABLE articles (
    articleId SERIAL PRIMARY KEY,
    title VARCHAR(255),
    date_created TIMESTAMP
    );   

CREATE TABLE comments (
    commentId SERIAL PRIMARY KEY,
    comment VARCHAR(255),
    authorId SERIAL REFERENCES teamusers(id),
    date_created TIMESTAMP
    );
const express = require('express');
const router = express.Router;
const pool = require('./db');


router.post("/auth/create-user",(req, res, next) => {
    const values = [
        
    ]
    pool.query(`INSERT INTO teamusers(),
    VALUES()`),
    values,(q_err, q_res) => {
        if(q_err) return next(q_err);
        res.json(q_res.rows);
    }
});

router.post("/auth/create-user/posttodb", (req, res, next) => {
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.gender,
        req.body.jobRole,
        req.body.department,
        req.body.address
     ]
    pool.query(`INSERT INTO teamusers (firstname,lastname,email,password,gender,jobRole,department,address)
                VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 , NOW() )`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      });
  });

router.post("/auth/signin",(req, res, next) => {
    const values = [
        req.body.email,
        req.body.password
    ]
    pool.query(`INSERT INTO teamusers(email,password)VALUES($1, $2)`,
    values,(q_err, q_res) => {
        if(q_err) return next(q_err);
        res.json(q_res.rows);
    }); 
});

router.post("/gifs",(req, res, next) => {
    const values = [
        req.body.image,
        req.body.title
    ]
    pool.query(`INSERT INTO gifs(title,imageUrl)VALUES($1, $2)`,
    values,(q_err, q_res) => {
        if(q_err) return next(q_err);
        res.json(q_res.rows);
    });
});

router.post("/articles",(req, res, next) => {
    const values = [
        req.body.title,
        req.body.article
    ]
    pool.query(`INSERT INTO articles(title,article)VALUES($1, $2)`,
    values,(q_err,q_res) => {
        if(q_err) return next(q_err);
        res.json(q_res.rows);
    });
});

router.patch("/articles/articleId",(req, res, next) => {
    const values = [
        req.body.title,
        req.body.article
    ]
    pool.query(`UPDATE articles SET title = $1,article = $2,date_created = NOW() WHERE articleId = $3`,
    values,(q_err, q_res) => {
        if(q_err) return next(q_err);
        res.json(q_res.rows);
    });
});

router.delete("/articles/articleId",(req, res, next) => {
    const articleId = req.body.articleId;
    pool.query(`DELETE FROM articles where articleId = $1`,[ articleId],
    (q_err, q_res) => {
        res.json(q_res.rows);
        console.log(q_err);
    });
});

router.delete("/gifs/gifId",(req, res, next) => {
    const gifId = req.body.gifId;
    pool.query(`DELETE FROM gifs where gifId = $1`,[ gifId],
    (q_err, q_res) => {
        res.json(q_res.rows);
        console.log(q_err);
    });
});

router.post("/articles/articleId/commenttodb",(req, res, next) => {
    const comment = req.body.comment;
    pool.query(`INSERT INTO comments(comment, authorId, date_created),VALUES($1, $2, NOW())`,
    values,(q_err, q_res) => {
        res.json(q_res.rows);
    });
});

router.post("/gifs/gifId/commenttodb",(req, res, next) => {
    const comment = req.body.comment;
    pool.query(`INSERT INTO gifs(comment, authorId, date_created),VALUES($1, $2, NOW())`,
    values,(q_err, q_res) => {
        res.json(q_res.rows);
    });
});

router.get("/feed",(req, res, next) => {
    
});








module.exports = router;
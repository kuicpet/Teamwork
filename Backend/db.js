const { pool } = require('pg');

const pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'teamworkdatabase',
    password: '',
    port: 5432
});


module.exports = pool;

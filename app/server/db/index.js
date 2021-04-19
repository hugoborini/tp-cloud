const mysql = require('mysql');
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER, 
    database: process.env.DB_NAME, 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

let data = {};

data.all = () => {
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM test', (err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
}

data.addclass = (className) => {
    return new Promise((resolve, reject) =>{
        pool.query(`INSERT INTO class (nameClasse) VALUES (${className})`, (err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
}





module.exports = data;
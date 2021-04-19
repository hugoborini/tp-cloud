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


/**
 * @param table str
 * @param column str
 * @param value str
 * @returns {Promise}
 */

data.additem = (table , column, value) => {
    return new Promise((resolve, reject) =>{
        pool.query(`INSERT INTO ${table} (${column}) VALUES (?)`, [value] ,(err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
}

/**
 * @param nameEleve str
 * @param lastNameEleve str
 * @param id_class int
 * @returns {Promise}
 */

data.addEleve = (nameEleve , lastNameEleve, id_class) => {
    return new Promise((resolve, reject) =>{
        pool.query(`INSERT INTO eleve (nameEleve, lastNameEleve, id_class) VALUES(?,?,?)`,[nameEleve, lastNameEleve, id_class], (err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
}

/**
 * @param nameClass str
 * @returns {id_class} int
 */

data.getIdClassByName = (nameClass) => {
    return new Promise((resolve, reject) =>{
        pool.query(`SELECT id_class FROM class WHERE nameClass = ? `,[nameClass], (err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
}






module.exports = data;
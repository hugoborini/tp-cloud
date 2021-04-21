const mysql = require('mysql');

// ADD FUNCTIONS 
const addItem = require("./add/addItem");
const addEleve = require("./add/addEleve");
const addProf = require("./add/addProf");

const addProfToLink = require("./add/addProfToLink");
const addNote = require("./add/addNote");


// GET FUNCTION 
const getIdClassByName = require("./get/getIdClassByName");
const getIdItemByName = require("./get/getIdItemByName");

const getIdEleve = require("./get/getIdEleve");
const getProfInfo = require('./get/getProfInfo');
const getElevesFromClass = require("./get/getElevesFromClass");

// UTILS FUNCTION 
const checkIfMatiereExist = require("./utils/checkIfMatiereExist");

require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

let data = {
    addItem,
    addEleve,
    addProf,
    addProfToLink,
    addNote,
    getIdClassByName,
    getIdItemByName,
    getIdEleve,
    getProfInfo,
    getElevesFromClass,
    checkIfMatiereExist
};

data.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM test', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = data;
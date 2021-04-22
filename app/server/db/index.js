const mysql = require('mysql');

// ADD FUNCTIONS 
const addItem = require("./add/addItem");
const addEleve = require("./add/addEleve");
const addProf = require("./add/addProf");

const addProfToLink = require("./add/addProfToLink");
const addNote = require("./add/addNote");
const addAbsence = require("./add/addAbsence");
const addJustification = require("./add/addJustification");


// GET FUNCTION 
const getIdClassByName = require("./get/getIdClassByName");
const getIdItemByName = require("./get/getIdItemByName");

const getInfoEleve = require("./get/getInfoEleve");
const getProfInfo = require('./get/getProfInfo');
const getElevesFromClass = require("./get/getElevesFromClass");
const getNoteByEleve = require("./get/getNoteByEleve");
const getNoteByClass = require("./get/getNoteByClass");
const getNoteByMatiereByClass = require("./get/getNoteByMatiereByClass");
const getNoteBytMatiereByEleve = require("./get/getNoteBytMatiereByEleve");
const getElevesBySearch = require("./get/getElevesBySearch");
const getAbsenceByEleve = require("./get/getAbsenceByEleve");

// UTILS FUNCTION 
const checkIfMatiereExist = require("./utils/checkIfMatiereExist");
const checkIfStudentExist = require("./utils/checkIfStudentExist");
const sendMail = require("./utils/sendEmail");;
const sendSms = require("./utils/sendSms");
const getAllAPiKeys = require('./utils/fireBaseQuery');
const pool = require("./config");

let data = {
    addItem,
    addEleve,
    addProf,
    addProfToLink,
    addNote,
    addAbsence,
    addJustification,
    getIdClassByName,
    getIdItemByName,
    getInfoEleve,
    getProfInfo,
    getElevesFromClass,
    getNoteByEleve,
    getNoteByClass,
    getNoteByMatiereByClass,
    getElevesBySearch,
    getNoteBytMatiereByEleve,
    getAbsenceByEleve,
    checkIfMatiereExist,
    checkIfStudentExist,
    sendMail,
    sendSms,
    getAllAPiKeys
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
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
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM test', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}


/**
 * @param table str
 * @param column str
 * @param value str
 * @returns {Promise}
 */

data.additem = (table, column, value) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO ${table} (${column}) VALUES (?)`, [value], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

/**
 * @param nameEleve str
 * @param lastNameEleve str
 * @param id_class int
 * @returns {Promise}
 */

data.addEleve = (nameEleve, lastNameEleve, id_classes) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO eleve (nameEleve, lastNameEleve, id_class) VALUES(?,?,?)`, [nameEleve, lastNameEleve, id_classes], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

/**
 * @param nameClass str
 * @returns {id_class} int
 */

data.getIdClassByName = (nameClass) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_class FROM class WHERE nameClass = ? `, [nameClass], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

/**
 * @param nameProf str
 * @param lastNameProf str
 * @param id_matiere int
 * @returns {Promise} 
 */

data.addProf = (nameProf, lastNameProf, id_matiere) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO prof (nameProf, lastNameProf, id_matiere) VALUES(?,?,?)`, [nameProf, lastNameProf, id_matiere], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

/**
 * @param nameMatiere str
 * @returns {id_matiere} int
 */

data.getIdItemByName = (table, column, value) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_${table} FROM ${table} WHERE ${column} = ? `, [value], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

/**
 * @param nameMatiere str
 * @returns {id_matiere} int
 */

 data.getIdEleve = (columnName, columnLastName, nameEleve, lastNameEleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_eleve FROM eleve WHERE ${columnName} = ? AND ${columnLastName} = ?`, [nameEleve, lastNameEleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

/**
 * @param nameMatiere str
 * @returns {id_matiere} int
 */

data.checkIfMatiereExist = (nameMatiere) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_matiere FROM matiere WHERE nameMatiere = ? `, [nameMatiere], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}


/**
 * @param id_prof int
 * @param id_class int
 * @param isPrincipal bool
 * @returns {Promise} 
 */


data.addProfToLink = (id_prof, id_class, isPrincipal) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO assoc_class(id_prof, id_class, isPrincipal) VALUES(?,?,?)`, [id_prof, id_class, isPrincipal], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

/**
 * @param nameProf str
 * @returns {Promise} 
 */


data.getProfInfo = (nameProf) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM assoc_class INNER JOIN prof ON assoc_class.id_prof = prof.id_prof INNER JOIN class ON assoc_class.id_class = class.id_class WHERE prof.nameProf = ?`,[nameProf], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}


data.getElevesFromClass = (nameClass) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM eleve INNER JOIN class ON class.id_class = eleve.id_class WHERE class.nameClass = ? `,[nameClass], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

data.insertNote = ({id_eleve, id_matiere, note, coef, dateNote, id_prof}) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO notes(id_eleve, id_matiere, note, coef, dateNote, id_prof) VALUES(?,?,?,?,?,?)`,[id_eleve, id_matiere, note, coef, dateNote, id_prof], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}



module.exports = data;
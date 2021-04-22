const pool = require("../config");


/**
 * @param columnName str
 * @param columnLastName str
 * @param nameEleve str
 * @param lastNameEleve str
 */

const getInfoEleve = (nameEleve, lastNameEleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_eleve, emailEleve, numeroEleve FROM eleve WHERE nameEleve = ? AND lastNameEleve = ?`, [nameEleve, lastNameEleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = getInfoEleve;
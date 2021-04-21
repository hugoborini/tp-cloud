const pool = require("../config");


/**
 * @param columnName str
 * @param columnLastName str
 * @param nameEleve str
 * @param lastNameEleve str
 */

const getIdEleve = (columnName, columnLastName, nameEleve, lastNameEleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_eleve FROM eleve WHERE ${columnName} = ? AND ${columnLastName} = ?`, [nameEleve, lastNameEleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = getIdEleve;
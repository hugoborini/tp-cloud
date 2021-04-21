const pool = require("../config");

/**
 * @param nameMatiere str
 * @returns {id_matiere} int
 */

const checkIfStudentExist = (nameEleve, lastNameEleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT COUNT(*) AS student FROM eleve WHERE nameEleve = ? AND lower(lastNameEleve) LIKE ?`, [nameEleve, lastNameEleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = checkIfStudentExist;
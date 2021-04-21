const pool = require("../config");

/**
 * @param nameMatiere str
 * @returns {id_matiere} int
 */

const checkIfStudentExist = (nameEleve, lastNameEleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT COUNT(*) as student FROM eleve WHERE lastNameEleve LIKE concat("${lastNameEleve}",'%') and nameEleve = ?`, [nameEleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = checkIfStudentExist;
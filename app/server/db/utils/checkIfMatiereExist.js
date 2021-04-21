const pool = require("../config");

/**
 * @param nameMatiere str
 * @returns {id_matiere} int
 */

const checkIfMatiereExist = (nameMatiere) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_matiere FROM matiere WHERE nameMatiere = ? `, [nameMatiere], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = checkIfMatiereExist;
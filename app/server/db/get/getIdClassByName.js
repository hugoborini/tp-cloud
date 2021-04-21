const pool = require("../config");




/**
 * @param nameClass str
 * @returns {id_class} int
 */

const getIdClassByName = (nameClass) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_class FROM class WHERE nameClass = ? `, [nameClass], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = getIdClassByName;
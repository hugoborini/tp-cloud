const pool = require("../config");


const getElevesFromClass = (nameClass) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM eleve INNER JOIN class ON class.id_class = eleve.id_class WHERE class.nameClass = ? `, [nameClass], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = getElevesFromClass;
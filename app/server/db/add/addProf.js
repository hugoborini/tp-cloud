const pool = require("../config");

/**
 * @param nameProf str
 * @param lastNameProf str
 * @param id_matiere int
 * @returns {Promise} 
 */


const addProf = (nameProf, lastNameProf, id_matiere) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO prof (nameProf, lastNameProf, id_matiere) VALUES(?,?,?)`, [nameProf, lastNameProf, id_matiere], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = addProf;
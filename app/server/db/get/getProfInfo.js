const pool = require("../config");


/**
 * @param nameProf str
 * @returns {Promise} 
 */


const getProfInfo = (nameProf) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM assoc_class INNER JOIN prof ON assoc_class.id_prof = prof.id_prof INNER JOIN class ON assoc_class.id_class = class.id_class WHERE prof.nameProf = ?`, [nameProf], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = getProfInfo;
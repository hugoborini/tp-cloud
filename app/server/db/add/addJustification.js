const pool = require("../config");

/**
 * @param nameEleve str
 * @param lastNameEleve str
 * @param id_class int
 * @returns {Promise}
 */

const addJustification = (id_absence, isJustificate) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE absence SET isJustificate = ${isJustificate} WHERE id_absence = ?`, [id_absence], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = addJustification;
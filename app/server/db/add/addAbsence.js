const pool = require("../config");

/**
 * @param id_eleve int
 * @param dateStart int
 * @param dateEnd int
 * @param isJustificate bool
 * 
 * @returns {Promise}
 */

const addAbsence = ({id_eleve, dateStart, dateEnd, isJustificate}) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO absence (id_eleve, dateStart, dateEnd, isJustificate) VALUES(?,?,?,?)`, [id_eleve, dateStart, dateEnd, isJustificate], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = addAbsence;
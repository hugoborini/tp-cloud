const pool = require("../config");

/**
 * @param nameEleve str
 * @param lastNameEleve str
 * @param id_class int
 * @returns {Promise}
 */

const addEleve = ({ nameEleve, lastNameEleve, id_class, emailEleve, numeroEleve }) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO eleve (nameEleve, lastNameEleve, id_class, emailEleve, numeroEleve) VALUES(?,?,?,?,?)`, [nameEleve, lastNameEleve, id_class, emailEleve, numeroEleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = addEleve;
const pool = require("../config");


/**
 * @param id_prof int
 * @param id_class int
 * @param isPrincipal bool
 * @returns {Promise} 
 */


const addProfToLink = (id_prof, id_class, isPrincipal) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO assoc_class(id_prof, id_class, isPrincipal) VALUES(?,?,?)`, [id_prof, id_class, isPrincipal], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = addProfToLink;
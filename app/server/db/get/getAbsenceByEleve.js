const pool = require("../config");


const getAbsenceByEleve = (nameEleve, lastNameEleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM absence INNER JOIN eleve ON absence.id_eleve = eleve.id_eleve WHERE eleve.nameEleve = ? AND eleve.lastNameEleve = ?`,[nameEleve, lastNameEleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = getAbsenceByEleve;
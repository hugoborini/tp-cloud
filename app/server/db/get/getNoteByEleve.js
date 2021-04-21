const pool = require("../config");

const getNoteByEleve = (id_eleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Note INNER JOIN eleve ON note.id_eleve = eleve.id_eleve WHERE eleve.id_eleve = ? `, [id_eleve], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = getNoteByEleve;
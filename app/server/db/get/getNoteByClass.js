const pool = require("../config");


const getNoteByClass = (nameClass) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM note INNER JOIN class ON note.id_class = class.id_class INNER JOIN eleve ON note.id_eleve = eleve.id_eleve INNER JOIN matiere ON note.id_matiere = matiere.id_matiere WHERE nameClass = ? `, [nameClass], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};


module.exports = getNoteByClass;
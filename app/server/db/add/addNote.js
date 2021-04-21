const pool = require("../config");

const addNote = ({ id_eleve, id_matiere, note, coef, dateNote, id_prof, id_class }) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO note(id_eleve, id_matiere, note, coef, dateNote, id_prof, id_class) VALUES(?,?,?,?,?,?,?)`, [id_eleve, id_matiere, note, coef, dateNote, id_prof, id_class], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}
module.exports = addNote;


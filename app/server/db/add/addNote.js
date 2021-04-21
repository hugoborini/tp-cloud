const pool = require("../config");

const addNote = ({ id_eleve, id_matiere, note, coef, dateNote, id_prof }) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO notes(id_eleve, id_matiere, note, coef, dateNote, id_prof) VALUES(?,?,?,?,?,?)`, [id_eleve, id_matiere, note, coef, dateNote, id_prof], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}
module.exports = addNote;


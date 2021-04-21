const pool = require("../config");


/**
 * @param nameClass str
 * @returns {id_class} int
 */

const getNoteBytMatiereByEleve = (id_eleve, nameMatiere) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM note INNER JOIN class ON note.id_class = class.id_class INNER JOIN eleve ON note.id_eleve = eleve.id_eleve INNER JOIN matiere ON note.id_matiere = matiere.id_matiere WHERE eleve.id_eleve = ? AND nameMatiere = ?`, [id_eleve, nameMatiere], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = getNoteBytMatiereByEleve;
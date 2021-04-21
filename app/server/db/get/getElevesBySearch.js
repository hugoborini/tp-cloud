const pool = require("../config");


const getElevesBySearch = (nameEleve, lastNameEleve) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM eleve WHERE nameEleve LIKE concat("${nameEleve}",'%') AND lastNameEleve LIKE concat("${lastNameEleve}", "%")`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = getElevesBySearch;
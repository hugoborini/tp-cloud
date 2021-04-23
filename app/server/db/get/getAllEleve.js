const pool = require("../config");


const getAllEleves = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * from eleve`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = getAllEleves;
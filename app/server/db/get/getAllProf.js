const pool = require("../config");


const getAllProf = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * from prof`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = getAllProf;
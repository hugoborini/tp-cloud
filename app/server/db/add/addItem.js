const pool = require("../config");

/**
 * @param table str
 * @param column str
 * @param value str
 * @returns {Promise}
 */


const addItem = (table, column, value) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO ${table} (${column}) VALUES (?)`, [value], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = addItem;
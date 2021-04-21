const pool = require("../config");


/**
 * @param table str
 * @param column str
 * @param value str
 */

const getIdItemByName = (table, column, value) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id_${table} FROM ${table} WHERE ${column} = ? `, [value], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}
module.exports = getIdItemByName;
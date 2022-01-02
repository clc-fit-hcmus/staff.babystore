const config = require('../../config/dbconfig');
const sql = require('mssql');

const queryAll = async (table) => {
    const pool = await sql.connect(config);
    const res = await pool.request().query(`SELECT * FROM ${table}`);
    return res.recordset;
}
const queryRange = async (func, a, b) => {
    const pool = await sql.connect(config);
    const res = await pool.request().query(`EXEC ${func} ${a}, ${b}`);
    return res.recordset;
}

module.exports = {
    queryAll,
    queryRange  
}
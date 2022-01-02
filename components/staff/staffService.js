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

const countAll = async (table) => {
    const pool = await sql.connect(config);
    const res = await pool.request().query(`SELECT COUNT(*) AS count FROM ${table}`);
    return res.recordset;
}

const queryHistory = async (req) => {
    const pool = await sql.connect(config);
    const res = await pool.request().query(`select nv.id_nhanvien,nv.hoten, ls.ngaynhanluong,ls.luongnhan from nhanvien nv 
    join lichsuluongNHANVIEN ls on nv.id_nhanvien=ls.id_nhanvien 
    where nv.id_nhanvien='${req.user.recordset[0].ID_NHANVIEN}'`);
    return res.recordset;
}

module.exports = {
    queryAll,
    queryRange,
    countAll,
    queryHistory  
}
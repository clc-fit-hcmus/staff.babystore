const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const sql = require('mssql');
const config = require('./dbconfig');

passport.serializeUser((user, done) => done(null, user.ID_NHANVIEN[0]));

passport.deserializeUser( async (id, done) => {
    const pool = await sql.connect(config);
    await pool.request().query(`select * from nhanvien nv where nv.id_nhanvien='${id}'`, (err, user) => done(err, user));
});

passport.use('local.signin', new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const pool = await sql.connect(config);
    await pool.request().query(`SELECT * FROM TAIKHOANNV TK join nhanvien nv on tk.id_NHANVIEN = nv.ID_NHANVIEN 
    where (TK.ACCOUNT_NV='${username}' and TK.PASSWORDS like '${password}' and nv.chucvu='STAFF')`, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, req.flash('error', 'Log in failed!'));
        }
        if (!(user.recordset)[0]) {
            return done(null, false, req.flash('error', 'Log in failed!'));
        }
        return done(null, user.recordset[0]);
    });
}));
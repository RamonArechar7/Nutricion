const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if (error) throw error;
});

exports.register = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const usuario = {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena // In a real app, hash this!
    };

    connection.query("INSERT INTO usuarios SET ?", usuario, (err, res_db) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Usuario."
            });
            return;
        }
        res.send({ id: res_db.insertId, ...usuario });
    });
};

exports.login = (req, res) => {
    const usuario = req.body.usuario;
    const contrasena = req.body.contrasena;

    connection.query("SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?", [usuario, contrasena], (err, res_db) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({ message: "Error retrieving Usuario" });
            return;
        }

        if (res_db.length) {
            res.send({ message: "Login successful", usuario: res_db[0] });
            return;
        }

        res.status(401).send({ message: "Invalid credentials" });
    });
};

const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// Create and Save a new Paciente
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Paciente
    const paciente = {
        id_paciente: req.body.id_paciente,
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        fecha_nacimiento: req.body.fecha_nacimiento,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        correo_electronico: req.body.correo_electronico
    };

    // Save Paciente in the database
    connection.query("INSERT INTO pacientes SET ?", paciente, (err, res_db) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Paciente."
            });
            return;
        }

        console.log("created paciente: ", { id: res_db.insertId, ...paciente });
        res.send({ id: res_db.insertId, ...paciente });
    });
};

// Retrieve all Pacientes from the database.
exports.findAll = (req, res) => {
    connection.query("SELECT * FROM pacientes", (err, res_db) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving pacientes."
            });
            return;
        }

        console.log("pacientes: ", res_db);
        res.send(res_db);
    });
};

// Find a single Paciente by Id (using internal ID or id_paciente, let's use id_paciente for lookup as per UI likely)
// But wait, the UI has "ID Paciente" input. Let's assume we search by that unique string ID.
exports.findOne = (req, res) => {
    connection.query(`SELECT * FROM pacientes WHERE id_paciente = ?`, [req.params.id], (err, res_db) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({
                message: "Error retrieving Paciente with id=" + req.params.id
            });
            return;
        }

        if (res_db.length) {
            console.log("found paciente: ", res_db[0]);
            res.send(res_db[0]);
            return;
        }

        // not found Paciente with the id
        res.status(404).send({
            message: `Not found Paciente with id ${req.params.id}.`
        });
    });
};

// Update a Paciente identified by the id_paciente in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    connection.query(
        "UPDATE pacientes SET nombre = ?, apellido_paterno = ?, apellido_materno = ?, fecha_nacimiento = ?, sexo = ?, telefono = ?, correo_electronico = ? WHERE id_paciente = ?",
        [req.body.nombre, req.body.apellido_paterno, req.body.apellido_materno, req.body.fecha_nacimiento, req.body.sexo, req.body.telefono, req.body.correo_electronico, req.params.id],
        (err, res_db) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: "Error updating Paciente with id " + req.params.id
                });
                return;
            }

            if (res_db.affectedRows == 0) {
                // not found Paciente with the id
                res.status(404).send({
                    message: `Not found Paciente with id ${req.params.id}.`
                });
                return;
            }

            console.log("updated paciente: ", { id: req.params.id, ...req.body });
            res.send({ id: req.params.id, ...req.body });
        }
    );
};

// Delete a Paciente with the specified id
exports.delete = (req, res) => {
    connection.query("DELETE FROM pacientes WHERE id_paciente = ?", [req.params.id], (err, res_db) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({
                message: "Could not delete Paciente with id " + req.params.id
            });
            return;
        }

        if (res_db.affectedRows == 0) {
            // not found Paciente with the id
            res.status(404).send({
                message: `Not found Paciente with id ${req.params.id}.`
            });
            return;
        }

        console.log("deleted paciente with id: ", req.params.id);
        res.send({ message: `Paciente was deleted successfully!` });
    });
};

module.exports = app => {
    const pacientes = require("../controllers/paciente.controller.js");

    var router = require("express").Router();

    // Create a new Paciente
    router.post("/", pacientes.create);

    // Retrieve all Pacientes
    router.get("/", pacientes.findAll);

    // Retrieve a single Paciente with id
    router.get("/:id", pacientes.findOne);

    // Update a Paciente with id
    router.put("/:id", pacientes.update);

    // Delete a Paciente with id
    router.delete("/:id", pacientes.delete);

    app.use('/api/pacientes', router);
};

module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");

    var router = require("express").Router();

    router.post("/register", usuarios.register);
    router.post("/login", usuarios.login);

    app.use('/api/usuarios', router);
};

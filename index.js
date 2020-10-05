const express = require('express');
const app = express();

/*
VERBOS HTTP: Formas de hacer peticiones
GET: Obtener algo.
POST: Guardar algo.
PATCH: Actualización de un dato de un recurso (registro en la BD).
PUT: Actualizar todos los datos de un recurso.
DELETE: Eliminar un recurso (un registro en la BD).
*/

app.get("/", (req, rest, next) => {
    res.status(200);
    res.send("Bienvenido");
});

app.listen(3000, () => {
    console.log("Server is running...");
});

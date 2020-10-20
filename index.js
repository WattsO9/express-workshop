const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


/*
VERBOS HTTP: Formas de hacer peticiones
GET: Obtener recursos.
POST: Almacenar recursos o guardar.
PATCH: Modificar una parte de un recurso.
PUT: Modificar un recurso.
DELETE: Borrar un recurso.
*/

app.get("/", (req, res, next) => {
     return res.status(200).json({ code: 1, message: "Bienvenido al Pókedex"});
});

app.use("/pokemon", pokemon);

app.use((req, res, next) => {
    return res.status(404).json({code:404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});

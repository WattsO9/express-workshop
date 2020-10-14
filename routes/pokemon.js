const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

pokemon.post("/", (req, res, next) => {
    return res.status(200).send(req.body);
});

pokemon.get("/", async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);

});

pokemon.get('/:id([0-9]{1,3})', async (req, res, next) =>{
    const id = req.params.id;
        let sentence = "SELECT * FROM pokemon WHERE pok_id="+id;
        const pkmn = await db.query(sentence);
        if (pkmn.length > 0){
            return res.status(200).send(pkmn);
        }
        else{
            return res.status(404).send("Pokémon no encontrado");
        }
});

pokemon.get('/:name([A-Za-z]+)', async (req, res, next) => {
    let name = req.params.name;
    name = name.toLowerCase();
    let sentence = "SELECT * FROM pokemon WHERE pok_name="+"'"+name+"'";

    const pkmn = await db.query(sentence);
    
    if (pkmn.length > 0){
        return res.status(200).send(pkmn);
    }
    else{
        return res.status(404).send("Pokémon no encontrado");
    }

});

module.exports = pokemon;
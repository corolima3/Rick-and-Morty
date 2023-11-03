const favs = require("../utils/favs");
const axios = require('axios');

const getFavs = async(req, res) => {
   // const { id } = req.params;
 /* 
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const data = response.data;
        if (data) {
            const character = {
                id: data.id,
                name: data.name,
                image: data.image,
                species: data.species,
                status: data.status,
                gender: data.gender
            };
            res.status(200).json(character)

        } else {
            res.status(404).json({ error: 'Character not found' });
        }

    } catch (error) { res.status(500).json(error.message) } */

    res.status(200).json(favs);
}

module.exports = getFavs;
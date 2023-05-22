const {Router}= require('express');
const {getAll}= require('../controller/getAll')
 const {getCharById}= require('../controller/getCharById');
 const {getCharDetail}= require('../controller/getCharDetail')
const postFav = require('../controller/postFav');
const getFavs = require('../controller/getFavs')
const deleteFav= require('../controller/deleteFav');

 const router= Router();

    router.use('/all', getAll);
    router.get('/onsearch/:id', getCharById);
    router.get('/detail/:id', getCharDetail);

    router.post("/favs", postFav);
    router.get("/favs", getFavs);
    router.delete("/favs/:id", deleteFav);

 module.exports= router;
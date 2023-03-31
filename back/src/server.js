const express = require('express');

// const getCharById= require("./src/controllers/getCharById");
// const getCharDetail= require("./src/controllers/getCharDetail");
//const  router  = require('./src/routes');
const router= require('./routes/index')

const cors = require('cors')

const server = express();

const PORT= 3001;
server.use(express.json());
server.use(cors());
server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log(`Server raised in port http://localhost:${PORT}`);
 });


































// const http=require('http');
// const characters= require("./utils/data")
// const PORT= 3001;

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     if (req.url.includes("rickandmorty/character")) {
//         console.log(req.url)
//     }
//  // console.log(req.url.split("/"))
// //    let id = req.url.split("/").pop()
// //    //console. Log(id);
// //    const character= characters.filter((char) =>char.id === Number(id))
// //    res
// //      .writeHead(200, { 'Content-Type':'application/json'})
// //      .end(JSON.stringify(character[0]))
// //     }
// }).listen(PORT,"localhost")
// //Iocalhost:3061/rickandmorty/character/4
//  //req.url: rickandaorty/character/4
//    //split [rickandmorty, character,4]

// //const id = req.ure split(*/)(3);
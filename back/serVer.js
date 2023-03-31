//const http=require('http');
//const characters= require("./src/utils/data")

// const express = require('express');

// const getCharById= require("./src/controllers/getCharById");
// const getCharDetail= require("./src/controllers/getCharDetail");
// //const  router  = require('./src/routes');
// const router= require('./src/routes/index')
// const cors = require('cors')

// const server = express();

// const PORT= 3001;
// server.use(express.json());
// server.use(cors());
// server.use('/rickandmorty', router)

// server.listen(PORT, () => {
//     console.log('Server raised in port ' + PORT);
//  });




// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     if (req.url.includes("onsearch")) {
//         let id = req.url.split("/").pop()
//         getCharById(res,id)
//     }
// if(req.url.includes('detail')) {
//     let id = req.url.split("/").pop();
//     getCharDetail(res,id)
// }

// }).listen(PORT,"localhost")




//********************************** */
//Iocalhost:3061/rickandmorty/character/4
 //req.url: rickandaorty/character/4
   //split [rickandmorty, character,4]

//const id = req.ure split(*/)(3);
///**************
// if (req.url.includes("rickandmorty/character")) {
      
//     // console.log(req.url.split("/"))
//      let id = req.url.split("/").pop()
//    //    //console. Log(id);
//        const character= characters.filter((char) =>char.id === Number(id))
//        res
//          .writeHead(200, { 'Content-Type':'application/json'})
//          .end(JSON.stringify(character[0]))
//         }
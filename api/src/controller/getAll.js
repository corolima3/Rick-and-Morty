 const axios = require('axios');
const {character}= require('../DB_connection')
async function getAll (req, res){
  try {
    const allcharacter= await character.findAll();
    res.status(200).json(allcharacter);
  } catch (error) {res.status(400).json({postMessage: error.message})
    
  }
}




 module.exports= {getAll};
//------------------------
// const axios = require('axios');

// function getAll (req, res){
//   const allArr = [];

//   for (let i = 0; i < 20; i++) {
//     axios.get(`https://rickandmortyapi.com/api/character/${i}`)
//     .then( response => response.data )
//     .then((data)=>{
//         const character = {
//                         id: data.id,
//                         name: data.name,
//                         image:data.image,
//                         species:data.species,
//                         status:data.status,
//                         gender:data.gender
//                     };

//                     allArr.push(character);
// if (allArr.length===19) {
//   res.status(200).json(allArr)
// }

//     }    )
//     .catch(error => {
//       if (!res.headersSent) res.status(500).json(error.message);
//         })
    
//   }
    
  
// }
// module.exports= {getAll};
const axios = require('axios');

async function getCharById (req, res){
    const {id}= req.params;
    console.log("hola");

    try {
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
       
            const character = {
                            id: response.data.id,
                            name: response.data.name,
                            image:response.data.image,
                            species:response.data.species,
                            status:response.data.status,
                            gender:response.data.gender
                        };
                        res.status(200).json(character)
      
        
    } catch (error) { res.status(500).json(error.message) }

}



module.exports={getCharById}
//  const getCharById=(res,id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(res => res.data)
//     .then(data=>{
//         const character = {
//             id: data.id,
//             name: data.name,
//             image:data.image,
//             specie:data.specie,
//             gender:data.gender
//         };
//         res.writeHead(200, { 'Content-Type':'application/json'}) //
// 	    res.end(JSON.stringify(character))
//     }) 
//     .catch((err)=> res.writeHead(500, { 'Content-Type':'text/plain'})
//         .end("Error:not found")
//     )

// }
// module.exports=getCharById;
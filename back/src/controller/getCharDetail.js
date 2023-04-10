const axios = require('axios');

function getCharDetail (req, res){
//async    
    const {id}= req.params;
    //await
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then( response=> response.data)
 
    .then((data)=>{
        const character = {
                        id: data.id,
                        name: data.name,
                        image:data.image,
                        species:data.species,
                        gender:data.gender,
                        status:data.status,
                        origin:data.origin?.name
                    };
                    res.status(200).json(character)
                  
    }   )
    .catch(error => {
        res.status(500).json(error.message);
    })
}
//data.origin.name:null

//module.exports=getCharDetail;
module.exports = {
    getCharDetail
}
//  const getCharDetail=(res,id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(res => res.data)
//     .then(data=>{
//         const character = {
//             id: data.id,
//             name: data.name,
//             image:data.image,
//             specie:data.specie,
//             gender:data.gender,
//             status:data.status,
//             origin:data.origin? data.origin.name:null
//         };
//         res.writeHead(200, { 'Content-Type':'application/json'}) //
// 	    res.end(JSON.stringify(character))
//     }) 
//     .catch((err)=> res.writeHead(500, { 'Content-Type':'text/plain'})
//         .end("Error:not found")
//     )

// }

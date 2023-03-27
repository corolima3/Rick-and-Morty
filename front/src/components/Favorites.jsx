import { useSelector,useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import {filterCards, orderCards} from "../redux/actions"
import Card from "./Card";

function Favorites() {
    
    //console.log(fav);
    const dispatch = useDispatch();

    const [favourites, setFavourites] = useState([])
    //const [order, setOrder] = useState("")
    const fav = useSelector(state => state.myFavorites)
    
    useEffect(()=>{
        setFavourites(fav)
    },[fav])

    function handleFilter(e){

        dispatch(filterCards(e.target.value));
    }


    return (
        <div>
            <h2>My Favorites</h2>
            <div>
            
     <select name="order" id=""
        onChange={ e => dispatch(orderCards(e.target.value))}
        >
         <option value="Ascending">Ascendente</option>
         <option value="Descending">Descendente</option>
    </select>
     <select name="gender" id="" onChange= {handleFilter}>
         <option value="All">All</option>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">Unknown</option>
     </select>
 

            </div>
            {
            favourites?.map((element, index) => {
             return ( 
              <Card 
                key={index}
                id={element.id}
                name ={element.name}
                species = {element.species} 
                gender={element.gender} 
                image = {element.image} 
                onClose={() => element.onClose(element.id)} />
                )
              })
            }
        </div>
    );
}

// export function mapStateToProps(state) {
//     return {
//         myFavorites : state.myFavorites
//     }
// }

export default Favorites;
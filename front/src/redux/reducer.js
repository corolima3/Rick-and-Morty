import { ADD_FAV, REMOVE_FAV,FILTER ,ORDER } from "./action-types";

const initialState ={
  myFavorites:[],
  allCharacters:[]
}

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_FAV:
            //console.log("soy el reducer", state.myFavorites)
            //state.myFavorites.push(payload);
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.myFavorites, payload]
            }
            case REMOVE_FAV:
                const filtered = state.myFavorites.filter((fav) => fav.id !== payload);
            return{
                ...state,
                myFavorites: filtered
            }
            case FILTER:

            // const primerFilter= payload==="All" ? state.allCharacters :  state.allCharacters.filter( char => char.gender === payload)
            // return{
            //     ...state,
            //     myFavorites: primerFilter
            // }
                if (payload === "All") {
                    return {
                        ...state,
                        myFavorites: [...state.allCharacters]
                    };
                }
                else {
                    return {
                        ...state,
                        myFavorites: state.allCharacters.filter( char => char.gender === payload)
                    };
            }
            case ORDER:
                if (payload === "Ascending") {
                    return {
                        ...state,
                        myFavorites: state.myFavorites.sort((a,b) => a.name > b.name )
                    };
                }
                else if (payload === "Descending") {
                    return {
                        ...state,
                        myFavorites: state.myFavorites.sort((a,b) => b.name > a.name)
                    };  
                } 
                else {
                    return {
                        ...state,
                        myFavorites: state.myFavorites.sort((a,b) => 0.5 - Math.random())
                    };
                }

        default:
            return {
                ...state
            }
    }
} 
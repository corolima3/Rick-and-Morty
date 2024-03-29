import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, CONTAINER_FAV } from "./action-types";

export function addFavorites(character) {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export function removeFavorites(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender 
    }
}
export function orderCards (order) {
    return {
        type: ORDER,
        payload: order
    }
}
export function containerFav(character){
    return{
        type: CONTAINER_FAV,
        payload: character
    }
}
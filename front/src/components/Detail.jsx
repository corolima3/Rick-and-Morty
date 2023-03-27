//import React from "react";
import {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail(){

const [character, setCharacter] = useState({});
const {detailId}= useParams ();
const navigate= useNavigate();
const backToHome=()=>{navigate('/')} 

useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
  .then((response) => response.json())
  .then((char) => {
      if (char.name) {
          setCharacter(char);
      } else {
      window.alert("No hay personajes con ese ID");
      }
  })
  .catch((err) => {
      window.alert("No hay personajes con ese ID");
  });
  return setCharacter({});
}, [detailId]);

    return(
        <div>
            <button onClick={backToHome}>
        Volver
      </button>
            <span>
            {
            character ? (
                <div >
                    <div >
                        <h1>{character.name}</h1>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                    </div>
                    <div >
                        <img src={character.image} alt={character.name} />
                    </div>
                </div>
            ) : ( "" )
        }
            </span>
        </div>
    )
}
//StatusSpecieGender,Origin,Image


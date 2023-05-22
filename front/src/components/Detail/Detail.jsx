//import React from "react";
import {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './Detail.module.css';

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
        <div className={style.main}>
            <button onClick={backToHome} className= {style.button}>To back</button>
                {character ? (
                    <div className={style.general} >
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                </div>
            ) : ( "" )
        }
         
        </div>
    )
}
//StatusSpecieGender,Origin,Image


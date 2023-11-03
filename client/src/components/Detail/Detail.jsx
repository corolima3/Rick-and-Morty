//import  from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './detail.module.css';

import { MdArrowBackIosNew } from 'react-icons/md';
export default function Detail() {

    const [character, setCharacter] = useState({});
    const { detailId } = useParams();
    const navigate = useNavigate();
    const backToHome = () => { navigate('/home') }

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

    return (
        <div className={style.container_detail}>
            <button onClick={backToHome}>
                <MdArrowBackIosNew className={style.button_back} />
            </button>
            <div className={style.detail}>
                {
                    character ? (
                        <div className={style.divide}>
                            <div className={style.text_detail}>
                                <h4>{character.name}</h4>
                                <h5>Status: {character.status}</h5>
                                <h5>Species: {character.species}</h5>
                                <h5>Gender: {character.gender}</h5>
                                <h5>Origin: {character.origin?.name}</h5>
                            </div>
                            <div >
                                <img src={character.image} alt={character.name} />
                            </div>
                        </div>
                    ) : ("")
                }
            </div>
        </div>
    )
}
//StatusSpecieGender,Origin,Image


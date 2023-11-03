import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import style from './Home.module.css'
import Cards from '../components/Cards/Cards'
//import { useDispatch, useSelector } from "react-redux";
//import { containerFav } from '../redux/actions'

export default function Home(props) {

    const [characters, setCharacters] = useState([]);
    //let { pathname } = useLocation();

    const onSearch = (characterId) => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.id) {
                    if (!(exists(data.id))) {
                        setCharacters((oldChars) => [...oldChars, data]);
                    } else {
                        window.alert(`Ya existe una tarjeta con ese personaje, su nombre es ${data.name}.`);
                    }

                } else { window.alert('No hay personajes con ese ID') }
            });
    }

    const onClose = (id) => {
        setCharacters( characters.filter(character => character.id !== id) )
    }
    // const onClose = characterId => {
    //     setCharacters(characters.filter(character => character["id"] !== characterId )) }
    // const onClear = () => { setCharacters([]); }

    const exists = (characterId) => {
        const isFound = characters.some(character => {
            if (character["id"] === characterId) return true;
            return false;
        });
        return isFound ? true : false;
    };
    return (
        <main className={style.main}>
            <div className={style.container}>
                <Nav onSearch={onSearch} />
                <section className={style.section}>
                    < Cards onClose={onClose} characters={characters} />
                    {/* <Outlet context={[characters, onClose, onSearch, onClear]}/> */}
                </section>
            </div>
        </main>
    );
}
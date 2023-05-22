import { useState } from 'react'
import style from './SearchBar.module.css'

function SearchBar({onSearch}) {

   const [character,setCharacter]= useState("")

   const handleChange=(event)=>{ setCharacter( event.target.value )
      }
   const handleAddClick = () => {
      onSearch(character);
      setCharacter(""); // Restablece el valor del campo `input` a una cadena vacía
   };

   return (
      <div>
         <input className={style.input} type='search' value={character} onChange={handleChange} />
         <button className={style.button} onClick={ handleAddClick }>Agregar</button>
     
      </div>
   );
}

export default SearchBar;
//<input type='search' />
//<button onClick={onSearch}>Agregar</button>
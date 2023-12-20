import { useState } from 'react';
import style from './SearchBar.module.css';

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   };

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         onSearch(character);
      }
   };

   return (
      <div className={style.container__search}>
         <input
            className={style.input}
            min={1}
            max={850}
            type="number"
            value={character}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
         />
         <button className={style.button} onClick={()=> onSearch(character)}>Search</button>
      </div>
   );
}

export default SearchBar;

//<input type='search' />
//<button onClick={onSearch}>Agregar</button>
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
const Nav=({onSearch})=>{

console.log('dfdsdfsf')
    return( 
        <nav>
            <span className={style.NavBar}>
                <Link to="/home" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/favorites" >Favorite</Link>
                <SearchBar className= {style.SearchBar} onSearch={onSearch}/>

            </span>
        </nav>
    )
}

export default Nav;

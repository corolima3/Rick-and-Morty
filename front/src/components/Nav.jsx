import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav=({onSearch})=>{
    return(
        <nav>
            <Link to="/home" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/favorites" >Favorite</Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;

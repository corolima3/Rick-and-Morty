import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.container}>
            <ul className={style.container__nav}>
                <li className={style.item}><Link to="/home">Home</Link></li>
                <li className={style.item}><Link to="/about">About</Link> </li>
                <li className={style.item}><Link to="/favorites">Favorite</Link>  </li>
                <li className={style.item}><SearchBar onSearch={onSearch} /></li>
            </ul>
        </nav>
    );
};

export default Nav;

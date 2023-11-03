import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from 'react-icons/md';
import { filterCards, orderCards } from "../../redux/actions";
import styles from './Favorite.module.css';
import Card from "../Card/Card";

function Favorites() {

    const dispatch = useDispatch();

    const [favourites, setFavourites] = useState([])
    //const [order, setOrder] = useState("")
    const fav = useSelector(state => state.myFavorites)

    useEffect(() => { setFavourites(fav) }, [fav])

    function handleFilter(e) {
        dispatch(filterCards(e.target.value));
    }

    return (
        <section className={styles.container_favorite}>
            <header>
                <h2>My Favorites</h2>
                <div className={styles.filters}>
                    <select name="order" id="" onChange={e => dispatch(orderCards(e.target.value))}>
                        <option value="Ascending">Ascendente</option>
                        <option value="Descending">Descendente</option>
                    </select>
                    <select name="gender" id="" onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </header>
            <div className={styles.container_cards}>
                {
                    favourites?.map((element, index) => {
                        return (
                            <Card
                                key={index}
                                id={element.id}
                                name={element.name}
                                species={element.species}
                                gender={element.gender}
                                image={element.image}
                                onClose={() => element.onClose(element.id)} />
                        )
                    })
                }
            </div>
            <div className={styles.return}>
                <Link to="/home">
                    <MdArrowBackIosNew className={styles.button_return} />
                </Link>
            </div>
        </section>
    );
}
export default Favorites;
// export function mapStateToProps(state) {
//     return {
//         myFavorites : state.myFavorites
//     }
// }
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { addFavorites, removeFavorites } from "../../redux/actions"
//import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Card(props) {

   const { onClose, name, species, gender, image, id, detailId} = props

   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (event) => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFavorites(props.id));
      } else {
         setIsFav(true);
         dispatch(addFavorites(props));
      }
   }

   useEffect(() => {
      if (myFavorites) {
        myFavorites.forEach((fav) => {
          if (fav.id === id) {
            setIsFav(true);
          }
        });
      }
    }, [myFavorites, id]);
   return (
      <div className={styles.container_card} key={id}>
         <div>
            <button className={styles.button} onClick={onClose}>X</button>
         </div>

         <Link to={`/detail/${detailId}`}>
            <img className={styles.imagen} src={image} alt={name} />
         </Link>
         <div className={styles.button_favorite}>
            {
               isFav ? (
                  <button onClick={ handleFavorite}>❤️</button>
               ) : (
                  <button onClick={ handleFavorite}>🤍</button>
               )}
         </div>
         <div className={styles.date_card}>
            <Link to={`/detail/${detailId}`}>
               <p className={styles.fontFamily}>{name}</p>
               <div className={styles.inline}>
                  <p className={styles.fontFamily}>{species}</p>
                  <p className={styles.fontFamily}>{gender}</p>
               </div>
            </Link>
         </div>
      </div>
   );
}
// export function mapStateToProps(state){
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// export function mapDispatchToProps(dispatch) {
//    return {
//      addFavorites : function (character) {
//        dispatch(addFavorites(character))
//      },
//      removeFavorites: function(id) {
//        dispatch(removeFavorites(id))
//      }
//    }
//  }
export default Card;
//export default connect(mapStateToProps, mapDispatchToProps) (Card);
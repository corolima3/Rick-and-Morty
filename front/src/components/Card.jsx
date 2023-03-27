import {Link} from "react-router-dom";
import styles from "./Estilo.module.css"
import { addFavorites, removeFavorites } from "../redux/actions"
//import { connect } from "react-redux";
import {useState, useEffect} from "react";
import  { useDispatch, useSelector } from "react-redux";

console.log("hola card")
 function Card(props) {

  const {onClose,name,species,gender,image, id, detailId}= props

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  
  const [isFav, setIsFav] = useState(false);

   const handleFavorite= (props)=> {
      if(isFav){
        setIsFav(false);
        dispatch(removeFavorites(props.id)); 
      }else{
        setIsFav(true);
        dispatch(addFavorites(props));
      }
    }
    useEffect(() => {
      myFavorites.forEach((fav) => {
          if (fav.id === id) {
            setIsFav(true);
        }
      });
    }, [ myFavorites ]);

   return (
      <>
      <span className={styles.listItem} key={id}>
        <div>
            <img className={styles.imagen} src={image} alt={name} />
               <div>
                  <button className={styles.boTon} onClick={onClose}>X</button>
               </div>
               <div>
                  {
                  isFav ? (
                     <button onClick={() => handleFavorite(props)}>❤️</button>
                     ) : (
                     <button onClick={()=>handleFavorite(props)}>🤍</button>
                  )}
               </div>
        </div>      
         <Link to={`/detail/${detailId}`}>
            <h2 className={styles.fontFamily}>{name}</h2>
         </Link>
         <h2 className={styles.fontFamily}>{species}</h2>
         <h2 className={styles.fontFamily}>{gender}</h2>
      </span>
      </>
   ); }

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
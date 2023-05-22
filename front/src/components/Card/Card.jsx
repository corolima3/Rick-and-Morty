import {Link} from "react-router-dom";
import style from "./Card.module.css"
import { addFavorites, removeFavorites } from "../../redux/actions"
//import { connect } from "react-redux";
import {useState, useEffect} from "react";
import  { useDispatch, useSelector } from "react-redux";

 function Card(props) {

  const {onClose,name,species,gender,image, id, detailId, index}= props

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  //ej 03, 3 React redux
  const [isFav, setIsFav] = useState(false);

   const handleFavorite= (props)=> {
      if(isFav){
        setIsFav(false);
        dispatch(removeFavorites(id)); 
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
    }, [ myFavorites, id]);

   return (
      <>
      <span className={style.card} key={index}>
        <div>
        <Link to={`/detail/${detailId}`}>
            <img  src={image} alt={name} />
         </Link>
               <div>
                  <button className={style.boTon} onClick={onClose}>X</button>
               </div>
               <span className={style.nav}>
                  {
                  isFav ? (
                     <button onClick={() => handleFavorite(props)}>❤️</button>
                     ) : (
                     <button onClick={()=>handleFavorite(props)}>🤍</button>
                  )}
               </span>
        </div>      
         <Link to={`/detail/${detailId}`} className={style.linkCard}>
            <h2 className={style.fontFamily}>{name}</h2>
         <h2 className={style.fontFamily}>{species}</h2>
         <h2 className={style.fontFamily}>{gender}</h2>
         </Link>
      </span>
      </>
   ); }
   
   export default Card;
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
//export default connect(mapStateToProps, mapDispatchToProps) (Card);
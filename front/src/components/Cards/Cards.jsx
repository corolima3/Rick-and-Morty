import Card from '../Card/Card';
import style from "./Cards.module.css";

function Cards({characters, onClose}) {

   return(
      <span  className={style.cards}>
         {characters.map(({id,name,species,gender,image}, index)=>{
            return <Card
               key={index}
               id={id}
               name={name.toUpperCase()}
               species={species}
               gender={gender}
               image={image}
               detailId={id}
               onClose={ ()=>onClose(id)}
               /> })  
         }
      </span>
   )
}
export default Cards;
import Card from './Card';
import styles from "./cards.module.css";

function Cards({characters, onClose}) {

   return(
      <span  className={styles.orden}>
         {characters.map(({id,name,species,gender,image})=>{
            return <Card
               key={id}
               name={name}
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
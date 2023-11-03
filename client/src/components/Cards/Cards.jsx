import Card from '../Card/Card';
import styles from "./cards.module.css";

function Cards({ characters, onClose }) {
   return (
      <div className={styles.container_cards}>
         {characters.map((character) => (
            <Card
               key={character.id} // Asegúrate de usar una clave única
               id={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               detailId={character.id}
               onClose={() => onClose(character.id)}
            />
         ))}
      </div>
   );
}
export default Cards;
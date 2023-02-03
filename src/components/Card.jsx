import {Link} from "react-router-dom";

 function Card({onClose,name,species,gender,image, id}) {
   return (
      <div>
         <img  src={image} alt={name} />
         <br />
         <button onClick={onClose}>X</button>
         <Link to={`detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
        
      </div>
   );
}
export default Card;
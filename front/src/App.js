import './App.css'
import Cards from './components/Cards/Cards.jsx'
//import SearchBar from './components/SearchBar.jsx'
import Nav from "./components/NavBar/NavBar.jsx"
import {useState, useEffect} from "react";
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorite/Favorites';
import{ Routes, Route, useNavigate, useLocation} from "react-router-dom";


function App () {
  const [characters,setCharacters]= useState([]);
  
  const navigate = useNavigate();
  const location= useLocation();

  const onSearch=(character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    // http://localhost:3001/rickandmorty/${character} //cambiar por new server
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
     
  }

  const onClose=(id)=>{
    setCharacters( characters.filter(character=>character.id!==id) )
  }

const [access, setAccess] = useState(false);

const username = 'caracol@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
  !access && navigate('/');
  }, [access, navigate]); //cambie [acess] a [acess,navigate]

  return (
    <div className='App' style={{ padding: '25px' }}>
      {
        location.pathname !== "/" && <Nav onSearch={onSearch}  />
      }
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
//   <Route path='login' element={<Form />} />
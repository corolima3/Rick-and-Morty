import './App.css'
import Cards from './components/Cards.jsx'
//import SearchBar from './components/SearchBar.jsx'
import Nav from "./components/Nav.jsx"
import {useState, useEffect} from "react";
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form'
import Favorites from './components/Favorites';
import{ Routes, Route, useNavigate, useLocation} from "react-router-dom";


function App () {
  const [characters,setCharacters]= useState([]);
  
  const navigate = useNavigate();
  const location= useLocation();
  const onSearch=(character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }
  const onClose=(id)=>{
    setCharacters(
      characters.filter(character=>character.id!==id)
    )
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
}, [access]);

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
        
      <hr />
    </div>
  )
}

export default App
//   <Route path='login' element={<Form />} />
import { useState, useEffect } from "react";
import './App.css'
//import SearchBar from './components/SearchBar.jsx'
import Home from './Layout/Home'
//import Nav from "./components/Nav/Nav"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorite/Favorites';
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  // const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  //const location = useLocation();

  // const onSearch = (character) => {
  //   fetch(`https://rickandmortyapi.com/api/character/${character}`)
  //     // http://localhost:3001/rickandmorty/${character} //cambiar por new server
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert('No hay personajes con ese ID');
  //       }
  //     })
  // }


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
  }, [access, navigate]);

  return (
    <div className='App' >
      {/* { location.pathname !== "/" && <Nav />} */}

      <Routes>
        {!access && <Route path='/' element={<Form login={login} />} />}
        {access && <>
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </>}
      </Routes>
    </div>
  )
}

export default App
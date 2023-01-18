import { Route, Routes } from 'react-router-dom';
import React, { useState} from 'react';
import './style.css'
import Header from './Components/Header';
import Favorites from './Components/Favorites';
import Home from './Components/Home';

export function App(props) {
  const [favorites, setFavorites] = useState([])

  const addWordToFavorites = (word) => {
    setFavorites(prevFavorites => [...prevFavorites, word])
  }

  const removeWordFromFavorites = (word) => {
    setFavorites(favorites.filter(favorite => favorite !== word))
  }


  return (
    <div className='App'>
       <Header favorites={favorites}></Header>
       <Routes>
       <Route path="/" 
       element={<Home favorites={favorites}
       addWordToFavorites={addWordToFavorites} 
       removeWordFromFavorites={removeWordFromFavorites}/>}/>
      {/* <Route path="/" element={<Header favorites={favorites}/>}/> */}
       <Route path="/favorites" element={<Favorites favorites={favorites}></Favorites>}></Route>
      </Routes>
    
    </div>
  );
}


import React from 'react';
import './assets/style.css';
import  CharactersList  from './Components/CharactersList';
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <CharactersList/>
    </div>
  );
}

export default App;

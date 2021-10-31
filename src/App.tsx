import './assets/style.css';
import './App.css'
import  AllCharactersList  from './Components/AllCharactersList';
import Header from "./Components/Header";
import Favorites from './Components/Favorites';
import Character from './Components/Character';


import {Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route strict exact path="/" component={AllCharactersList}/>
        <Route path="/Favorites" component={Favorites}/>
        <Route strict exact path="/:id" component={Character}/>
      </Switch>
    </div>
  );
}

export default App;

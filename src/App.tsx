import './assets/style.css';
import './App.css'
import  AllCharactersList  from './Components/AllCharactersList';
import Header from "./Components/Header";
import Favorites from './Components/Favorites';
import LinksAndDescribe from './Components/LinksAndDescribe';

import {Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <LinksAndDescribe/>
      <Switch>
        <Route strict exact path="/" component={AllCharactersList}/>
        <Route path="/Favorites" component={Favorites}/>
      </Switch>

    </div>
  );
}

export default App;

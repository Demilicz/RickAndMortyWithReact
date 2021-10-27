import './assets/style.css';
import './App.css'
import  AllCharactersList  from './Components/AllCharactersList';
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <AllCharactersList/>
    </div>
  );
}

export default App;

import { useCharacters } from '../Query_hooks/useCharacters';
import Pagination from './Pagination';
import LinksAndDescribe from './LinksAndDescribe';
import { Link } from "react-router-dom";
import { useState, useEffect} from 'react';



interface Character {
  name: string;
  id: string;
  image: string;
  gender: string;
  species: string;
  episode: Episode[]
};

interface Episode {
  episode: string
};


function AllCharactersList() {

  const [page, setPage] = useState(1);

  const {error, loading, data} =  useCharacters(page);


  useEffect(() => {

    setPage(Number(localStorage.getItem('page')));

  } , []);

  useEffect(() => {
    window.localStorage.setItem('page', String(page));
  }, [page]);




  if(error) return <div>Something went wrong..</div>

  if(loading) return <div>It's loading...</div>

  return <div>
    <LinksAndDescribe/>
     {data.characters.results.map( (char: Character) => {

    return  <div className="card" key={char.id}>
              <img src={char.image} alt={char.name} className="card-image" style={{
                width: 43,
                height: 68,
                objectFit: "cover"
              }}/>
              <div className="card-id">{char.id}</div>



              <Link to={`/${char.id}`} className="card-name">{char.name}</Link>
              <div className="card-gender">
                { char.gender === "Male" && <i className="_icon-male_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                { char.gender === "Female" && <i className="_icon-female_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                { char.gender === "unknown" && <i className="_icon-remove_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                { char.gender === "Genderless" && <i className="_icon-close_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                <p>{char.gender}</p>
                </div>
              <div className="card-species">{char.species}</div>
              <div className="card-episode">{char.episode[char.episode.length - 1].episode}</div>
              <button className="card-button">
                <i className="card-icon _icon-star_black_24dp"></i>
              </button>
            </div>


  })}
  <Pagination pages={data.characters.info.pages} setPage={setPage} page={page}/>
  </div>

}


export default AllCharactersList;



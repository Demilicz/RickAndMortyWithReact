// import { removeFavObject } from '../features/favoriteSlice';
import { useSelector } from 'react-redux';
import LinksAndDescribe from './LinksAndDescribe';
import { RootState } from '../Store/store';
import { Link } from "react-router-dom";



function Favorites() {

  const stateFavoritesItems = useSelector((state: RootState) =>  state.favorite.value);

  return <div>
          <LinksAndDescribe lastString={'Remove from Favorite'}/>
          {stateFavoritesItems.length === 0 && <div className='no_favorite'>You have no favorites characters</div>}
          {stateFavoritesItems.length > 0 && stateFavoritesItems.map((item) => {
            return <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-image" style={{
              width: 43,
              height: 68,
              objectFit: "cover"
            }}/>
            <div className="card-id">{item.id}</div>
            <Link to={`/${item.id}`} className="card-name">{item.name}</Link>
              <div className="card-gender">
                { item.gender === "Male" && <i className="_icon-male_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                { item.gender === "Female" && <i className="_icon-female_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                { item.gender === "unknown" && <i className="_icon-remove_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                { item.gender === "Genderless" && <i className="_icon-close_black_24dp" style={ { fontSize: 20, marginRight: 10}}></i> }
                <p>{item.gender}</p>
                </div>
                <div className="card-species">{item.species}</div>
              <div className="card-episode">{item.episode[item.episode.length - 1].episode}</div>
              <button className="card-button" onClick={()=> {}}>
                <i className="_icon-star_black_24dp"></i>
              </button>
            </div>


          }) }
    </div>
}

export default Favorites;

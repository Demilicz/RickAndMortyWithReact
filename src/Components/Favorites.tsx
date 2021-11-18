// import { removeFavObject } from '../features/favoriteSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LinksAndDescribe from './LinksAndDescribe';
import { RootState } from '../Store/store';



function Favorites() {

  const stateFavoritesItems = useSelector((state: RootState) =>  state.favorite.value);

  useEffect(()=> {
    console.log(stateFavoritesItems);

  }, [stateFavoritesItems])

  return <div>
          <LinksAndDescribe/>
     
    </div>
}

export default Favorites;

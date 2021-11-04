import { useParams } from 'react-router';
import { useCharacter } from '../Query_hooks/useCharacter';

interface Episode {
  name: string,
  episode: string
}


export default function Character() {

  const { id } = useParams< {id: string}>();

  const {error, loading, data} =  useCharacter(id);

  if(error) return <div>Something went wrong..</div>

  if(loading) return <div>It's loading...</div>

   return (<div className="Character">


  <img src={data.character.image} alt={data.character.name} className="Character-img"/>

  <div className='Character-content'>
    <h2 className="Character-name">{data.character.name}</h2>
    <p className="Character-gender">{data.character.gender}</p>
    <p className="Character-status">{data.character.status}</p>
  </div>
  <div className="Character-episode">

    {data.character.episode.map((episode: Episode) => {

        return <div key={episode.name} style={{flex: '0 0 25%', margin: 10}}>
          <div style={{marginBottom: 10}}>
          {episode.name}
          </div>
          <b>{episode.episode}</b>
        </div>
    }) }
  </div>

  </div>)
}
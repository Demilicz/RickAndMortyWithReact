import { useParams } from 'react-router';
import useCharacter from '../Query_hooks/useCharacter';

interface Episode {
  name: String,
  episode: String
}


export default function Character() {

  const { id } = useParams< {id: string}>();

  const {error, loading, data} =  useCharacter(id);

  if(error) return <div>Something went wrong..</div>

  if(loading) return <div>It's loading...</div>

   return (<div className="Character">


  <img src={data.character.image} alt={data.character.name} width={400} height={400}/>

  <div className='Character-content'>
    <h2>{data.character.name}</h2>
    <p>{data.character.gender}</p>
  </div>
  <div className="Character-episode">

    {data.character.episode.map((episode: Episode) => {
        return <div>
          <div key={data.character.name}>
          {episode.name}
          </div>
          <b>{episode.episode}</b>
        </div>
    }) }
  </div>

  </div>)
}
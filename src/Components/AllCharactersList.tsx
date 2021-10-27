import { useQuery, gql } from "@apollo/client";

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



const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        name
        id
        image
        gender
        species
        episode {
          episode
        }
      }
    }
  }`;

function AllCharactersList() {

  const {  error , loading, data }  = useQuery(GET_CHARACTERS);

  console.log({data});

  if(error) return <div>Something went wrong..</div>

  if(loading) return <div>It's loading...</div>

  return <div> {data.characters.results.map( (char: Character) => {


    return  <div>
      <img src={char.image} alt={char.name}/>
    </div>

  })}</div>


}

export default AllCharactersList;



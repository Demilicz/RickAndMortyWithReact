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

  if(error) return <div>Something went wrong..</div>

  if(loading) return <div>It's loading...</div>

  return <div> {data.characters.results.map( (char: Character) => {

    return  <div className="card" key={char.name}>
              <img src={char.image} alt={char.name} className="card-image" style={{
                width: 43,
                height: 68,
                objectFit: "cover"
              }}/>
              <div className="card-id">{char.id}</div>
              <div className="card-name">{char.name}</div>
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
  })}</div>

}

export default AllCharactersList;



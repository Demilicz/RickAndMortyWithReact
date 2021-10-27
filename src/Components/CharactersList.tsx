import { useQuery, gql } from "@apollo/client";


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

function CharactersList() {

  const { data }  = useQuery(GET_CHARACTERS);

  console.log({data});


  return <div></div>
}

export default CharactersList;



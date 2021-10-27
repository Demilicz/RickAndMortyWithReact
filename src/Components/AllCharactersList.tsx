import { useQuery, gql } from "@apollo/client";

// interface Character = {
//   name: String,
//   id: String,
//   image: String,
//   gender: String,
//   species: String,
//   episode: {
//     episode: String
//   }
// };



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

  // return <div> {data.characters.results.map( char => {
  //   return  <div>
  //     {/* <img src={char.image}/> */}
  //   </div>

  // })}</div>

  return <div></div>
}

export default AllCharactersList;



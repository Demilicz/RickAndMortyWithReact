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

export  const useCharacters = () => {
  const {  error , loading, data }  = useQuery(GET_CHARACTERS);

  return {
    error,
    loading,
    data
  }
}
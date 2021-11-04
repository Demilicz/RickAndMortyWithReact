import { useQuery, gql } from "@apollo/client";


const GET_CHARACTERS = gql`
  query GetCharacters ($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
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




export  const useCharacters = (page: number) => {
  const {  error , loading, data }  = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    }
  })




  return {
    error,
    loading,
    data
  }
}
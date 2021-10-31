import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
query GetCharacter($id: ID!){
  character(id: $id) {
    name
    gender
    image
    episode {
      name
      episode
    }
  }
}`;

 const useCharacters = (id: string| undefined) => {

   const {data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    }
  })


  return {
    error,
    loading,
    data
  }
}


export default useCharacters;
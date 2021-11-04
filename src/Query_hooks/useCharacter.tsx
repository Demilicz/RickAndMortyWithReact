import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
query GetCharacter($id: ID!){
  character(id: $id) {
    name
    gender
    image
    status
    id
    episode {
      name
      episode
    }
  }
}`;

export const useCharacter = (id: string| undefined) => {

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



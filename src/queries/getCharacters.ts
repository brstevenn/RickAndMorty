import { gql, useMutation } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharactersPage($page: Int! = 1, $filter: String) {
    characters(page: $page, filter: { name: $filter }) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        image
        gender
        location {
          id
          name
        }
      }
    }
  }
`;

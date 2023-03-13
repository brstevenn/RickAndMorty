import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int! = 1, $filter: String = "") {
    episodes(page: $page, filter: { name: $filter }) {
      info {
        count
      }
      results {
        id
        name
        episode
      }
    }
  }
`;

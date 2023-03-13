import { gql } from '@apollo/client';

export const MY_QUERY = gql`
  query MyQuery {
    // aquí va la consulta GraphQL
  }
`;

export const MY_MUTATION = gql`
  mutation MyMutation {
    // aquí va la mutación GraphQL
  }
`;

// y así sucesivamente para todas tus consultas y mutaciones
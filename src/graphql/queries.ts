import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query Pages {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;

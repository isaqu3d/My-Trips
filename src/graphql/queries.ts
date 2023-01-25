import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;
export const GET_PAGES_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`;

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      name
      slug
      location {
        longitude
        latitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;

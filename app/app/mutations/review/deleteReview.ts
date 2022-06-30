import { gql } from "@apollo/client";

export const getDeleteReview = () => {
  return gql`
    mutation deleteReview($id: ID!) {
      deleteReview(input: { id: $id }) {
        message
      }
    }
  `;
};

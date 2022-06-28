import { gql } from "@apollo/client";

export const getDeleteCompany = () => {
  return gql`
    mutation deleteCompany($id: ID!) {
      deleteCompany(input: { id: $id }) {
        message
      }
    }
  `;
};

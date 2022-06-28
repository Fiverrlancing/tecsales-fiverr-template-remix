import { gql } from "@apollo/client";

export const getUpdateCompanyMutation = () => {
  return gql`
    mutation updateCompany(
      $id: ID!
      $name: String!
      $number: Int!
      $address: AddressInput!
    ) {
      updateCompany(
        input: {
          id: $id
          name: $name
          number: $number
          address: $address
        }
      ) {
        message
      }
    }
  `;
};

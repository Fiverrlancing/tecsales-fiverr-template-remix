import { gql } from "@apollo/client";

export const getCreateCompanyMutation = () => {
  return gql`
    mutation createCompany(
      $name: String!
      $number: Int!
      $address: AddressInput!
    ) {
      createCompany(
        input: {
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

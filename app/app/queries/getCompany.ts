import { gql } from "@apollo/client";

export const getCompany = () => {
  return gql`
    query getCompany($id: String!) {
      getCompany(id: $id) {
        id
        name
        number
        address {
          line1
          line2
          line3
          townCity
          country
          postZipCode
          provinceCode
          isDefault
        }      
        createdAtISO
        updatedAtISO
        deletedAtISO
      }
    }
  `;
};

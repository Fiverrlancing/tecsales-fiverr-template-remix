import { gql } from "@apollo/client";

export const getDeleteDiscountCode = () => {
  return gql`
    mutation deleteDiscountCode($id: ID!) {
      deleteDiscountCode(input: { id: $id }) {
        message
      }
    }
  `;
};

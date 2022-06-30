import { gql } from "@apollo/client";

export const getDeleteDiscountRule = () => {
  return gql`
    mutation deleteDiscountRule($id: ID!) {
      deleteDiscountRule(input: { id: $id }) {
        message
      }
    }
  `;
};

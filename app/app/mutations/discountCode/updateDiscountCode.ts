import { gql } from "@apollo/client";

export const getUpdateDiscountCodeMutation = () => {
  return gql`
    mutation updateDiscountCode(
      $id: ID!
      $rule: UpdateDiscountRuleInput
      $code: String!
    ) {
      updateDiscountCode(
        input: {
          id: $id
          rule: $rule
          code: $code          
        }
      ) {
        message
      }
    }
  `;
};

import { gql } from "@apollo/client";

export const getCreateDiscountCodeMutation = () => {
  return gql`
    mutation createDiscountCode(
      $rule: CreateDiscountRuleInput
      $code: String!
    ) {
      createDiscountCode(
        input: {
          rule: $rule
          code: $code          
        }
      ) {
        message
      }
    }
  `;
};

import { gql } from "@apollo/client";

export const getCreateInventoryBatchMutation = () => {
  return gql`
    mutation createInventoryBatch(
      $reference: String!
      $name: String!
      $description: String!
      $quantity: Int!
      $inventoryVariantId: String!
      $expirationISO: String!
    ) {
      createInventoryBatch(
        input: {
          reference: $reference
          name: $name
          description: $description
          quantity: $quantity
          inventoryVariantId: $inventoryVariantId
          expirationISO: $expirationISO
        }
      ) {
        message
      }
    }
  `;
};

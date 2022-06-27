import { gql } from "@apollo/client";

export const getInventoryBatchQuery = () => {
  return gql`
    query getInventoryBatch($id: String!) {
      getInventoryBatch(id: $id) {
        id
        reference
        name
        description
        quantity
        inventoryVariantId
        expirationISO
        createdAtISO
        updatedAtISO
        deletedAtISO
      }
    }
  `;
};

import { gql } from "@apollo/client";

export const getDeleteInventoryBatchMutation = () => {
  return gql`
    mutation deleteInventoryBatch($id: ID!) {
      deleteInventoryBatch(input: { id: $id }) {
        message
      }
    }
  `;
};

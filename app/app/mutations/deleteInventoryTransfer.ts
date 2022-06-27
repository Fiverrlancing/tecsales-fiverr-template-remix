import { gql } from "@apollo/client";

export const getDeleteInventoryTransferMutation = () => {
  return gql`
    mutation deleteInventoryTransfer($id: ID!) {
      deleteInventoryTransfer(input: { id: $id }) {
        message
      }
    }
  `;
};

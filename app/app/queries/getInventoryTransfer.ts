import { gql } from "@apollo/client";

export const getInventoryTransferQuery = () => {
  return gql`
    query getInventoryTransfer($id: String!) {
      getInventoryTransfer(id: $id) {
        id
        vendorReference
        customerReference
        originId
        destinationId
        expectedDeliveryDateISO
        trackingCarrierId
        trackingCode
        trackingUrl
        items {
          inventoryTransferId
          inventoryVariantId
          inventoryUnitId
          quantity {
            amount
            metric
          }
        }
        createdAtISO
        updatedAtISO
        deletedAtISO
      }
    }
  `;
};

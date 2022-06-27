import { gql } from "@apollo/client";

export const getCreateInventoryTransferMutation = () => {
  return gql`
    mutation createInventoryTransfer(
      $vendorReference: String!
      $customerReference: String!
      $originId: String!
      $destinationId: String!
      $expectedDeliveryDateISO: String!
      $trackingCarrierId: String!
      $trackingCode: String!
      $trackingUrl: String!
      $items: [CreateInventoryTransferItemInput]!
    ) {
      createInventoryTransfer(
        input: {
          vendorReference: $vendorReference
          customerReference: $customerReference
          originId: $originId
          destinationId: $destinationId
          expectedDeliveryDateISO: $expectedDeliveryDateISO
          trackingCarrierId: $trackingCarrierId
          trackingCode: $trackingCode
          trackingUrl: $trackingUrl
          items: $items
        }
      ) {
        message
      }
    }
  `;
};

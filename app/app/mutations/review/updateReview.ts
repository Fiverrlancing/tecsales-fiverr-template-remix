import { gql } from "@apollo/client";

export const getUpdateReviewMutation = () => {
  return gql`
    mutation updateReview(
      $id: ID!
      $text: String!
      $rating: Float!
      $showName: Boolean!
      $orderId: String!
      $productId: String!
      $salesChannelId: String!
    ) {
      updateReview(
        input: {
          id: $id
          text: $text
          rating: $rating
          showName: $showName
          orderId: $orderId
          productId: $productId
          salesChannelId: $salesChannelId
        }
      ) {
        message
      }
    }
  `;
};

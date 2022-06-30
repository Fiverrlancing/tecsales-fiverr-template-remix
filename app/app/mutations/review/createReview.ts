import { gql } from "@apollo/client";

export const getCreateReviewMutation = () => {
  return gql`
    mutation createReview(
      $text: String!
      $rating: Float!
      $showName: Boolean!
      $orderId: String!
      $productId: String!
      $salesChannelId: String!
    ) {
      createReview(
        input: {
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

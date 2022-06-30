import { gql } from "@apollo/client";

export const getReview = () => {
  return gql`
    query getReview($id: String!) {
      getReview(id: $id) {
        id
        text
        rating
        showName
        orderId
        productId
        salesChannelId
      }
    }
  `;
};

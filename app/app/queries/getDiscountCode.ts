import { gql } from "@apollo/client";

export const getDiscountCode = () => {
  return gql`
    query getDiscountCode($id: String!) {
      getDiscountCode(id: $id) {
        id
        rule {
          name
          inceptsAtISO
          expiresAtISO
          maxUsageCount
          currentUsageCount
          canUseWithOtherDiscounts
          limitPerCustomer
          limitPerOrder
          calculateOn
          type
          discountValue
          productSelection
          customerSelection
          minimumAmountType
          minimumPurchaseAmount
          minimumQuantityAmount
          minimumSubTotalAmount
          maxQuantityAmount
          maxPurchaseAmount
          maxSubTotalAmount
          maxShippingRate
          behaviorOnMaxReached
          customerIds
          productIds
          countryCodes
          bulkBuyProductIds
          bulkBuyQuantity
        }
        code
        createdAtISO
        updatedAtISO
        deletedAtISO
      }
    }
  `;
};

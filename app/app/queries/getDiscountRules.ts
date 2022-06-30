import { gql } from "@apollo/client";

export const getDiscountRules = () => {
  return gql`
    query getDiscountRule($id: String!) {
      getDiscountRule(id: $id) {
        id
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
        createdAtISO
        updatedAtISO
        deletedAtISO
      }
    }
  `;
};

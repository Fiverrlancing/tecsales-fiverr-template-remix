import { gql } from "@apollo/client";

export const getUpdateDiscountRuleMutation = () => {
  return gql`
    mutation updateDiscountRule(
      $id: ID!
      $name: String!
      $inceptsAtISO: String!
      $expiresAtISO: String!
      $maxUsageCount: Int!
      $currentUsageCount: Int!
      $canUseWithOtherDiscounts: Boolean!
      $limitPerCustomer: Int!
      $limitPerOrder: Int!
      $calculateOn: CalculateOnType!
      $type: DiscountType!
      $discountValue: Float!
      $productSelection: ProductSelection
      $customerSelection: CustomerSelection
      $minimumAmountType: MinimumAmountType
      $minimumPurchaseAmount: Float
      $minimumQuantityAmount: Int
      $minimumSubTotalAmount: Float
      $maxQuantityAmount: Float
      $maxPurchaseAmount: Float
      $maxSubTotalAmount: Float
      $maxShippingRate: Float
      $behaviorOnMaxReached: BehaviorOnMaxReached
      $customerIds: [String]
      $productIds: [String]
      $countryCodes: [String]
      $bulkBuyProductIds: [String]
      $bulkBuyQuantity: Int
    ) {
      updateDiscountRule(
        input: {
          id: $id
          name: $name
          inceptsAtISO: $inceptsAtISO
          expiresAtISO: $expiresAtISO
          maxUsageCount: $maxUsageCount
          currentUsageCount: $currentUsageCount
          canUseWithOtherDiscounts: $canUseWithOtherDiscounts
          limitPerCustomer: $limitPerCustomer
          limitPerOrder: $limitPerOrder
          calculateOn: $calculateOn
          type: $type
          discountValue: $discountValue
          productSelection: $productSelection
          customerSelection: $customerSelection
          minimumAmountType: $minimumAmountType
          minimumPurchaseAmount: $minimumPurchaseAmount
          minimumQuantityAmount: $minimumQuantityAmount
          minimumSubTotalAmount: $minimumSubTotalAmount
          maxQuantityAmount: $maxQuantityAmount
          maxPurchaseAmount: $maxPurchaseAmount
          maxSubTotalAmount: $maxSubTotalAmount
          maxShippingRate: $maxShippingRate
          behaviorOnMaxReached: $behaviorOnMaxReached
          customerIds: $customerIds
          productIds: $productIds
          countryCodes: $countryCodes
          bulkBuyProductIds: $bulkBuyProductIds
          bulkBuyQuantity: $bulkBuyQuantity     
        }
      ) {
        message
      }
    }
  `;
};

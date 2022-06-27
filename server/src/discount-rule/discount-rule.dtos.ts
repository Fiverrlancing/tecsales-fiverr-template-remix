export type CalculateOnType = 'LINE_ITEMS' | 'ORDER' | 'SHIPPING';
export type DiscountType = 'PERCENTAGE' | 'FIXED' | 'BUY_X_GET_Y' | 'FREE';
export type ProductSelection = 'ALL' | 'SPECIFIC';
export type CustomerSelection = 'ALL' | 'SPECIFIC';
export type MinimumAmountType = 'PURCHASE_AMOUNT' | 'QUANTITY';

export class DiscountRuleDto {
  id: string;
  name: string;
  inceptsAtISO: string;
  expiresAtISO: string;

  maxUsageCount: number; // 0 = unlimited
  currentUsageCount: number;
  canUseWithOtherDiscounts: boolean;
  limitPerCustomer: number;
  limitPerOrder: number;

  type: DiscountType;
  calculateOn: CalculateOnType;
  discountValue: number;
  productSelection: ProductSelection;
  customerSelection: CustomerSelection;

  minimumAmountType: MinimumAmountType;
  minimumPurchaseAmount: number;
  minimumQuantityAmount: number;
  minimumSubTotalAmount: number;

  maxQuantityAmount: number;
  maxPurchaseAmount: number;
  maxSubTotalAmount: number;
  maxShippingRate: number;

  behaviorOnMaxReached: 'CALCULATE_UPTO' | 'EXCLUDE_DISCOUNT';

  customerIds: string[];
  productIds: string[];
  countryCodes: string[];
  bulkBuyProductIds: string[];
  bulkBuyQuantity: number;

  createdAtISO: string;
  updatedAtISO: string;
  deletedAtISO: string;
}

export class CreateDiscountRuleDto {
  name: string;
  inceptsAtISO: string;
  expiresAtISO: string;

  maxUsageCount: number; // 0 = unlimited
  currentUsageCount: number;
  canUseWithOtherDiscounts: boolean;
  limitPerCustomer: number;
  limitPerOrder: number;

  calculateOn: CalculateOnType;
  type: DiscountType;
  discountValue: number;
  productSelection: ProductSelection;
  customerSelection: CustomerSelection;

  minimumAmountType: MinimumAmountType;
  minimumPurchaseAmount: number;
  minimumQuantityAmount: number;
  minimumSubTotalAmount: number;

  maxQuantityAmount: number;
  maxPurchaseAmount: number;
  maxSubTotalAmount: number;
  maxShippingRate: number;

  behaviorOnMaxReached: 'CALCULATE_UPTO' | 'EXCLUDE_DISCOUNT';

  customerIds: string[];
  productIds: string[];
  countryCodes: string[];
  bulkBuyProductIds: string[];
  bulkBuyQuantity: number;
}

export class UpdateDiscountRuleDto {
  id: string;
  name: string;
  inceptsAtISO: string;
  expiresAtISO: string;

  maxUsageCount: number; // 0 = unlimited
  currentUsageCount: number;
  canUseWithOtherDiscounts: boolean;
  limitPerCustomer: number;
  limitPerOrder: number;

  calculateOn: CalculateOnType;
  type: DiscountType;
  discountValue: number;
  productSelection: ProductSelection;
  customerSelection: CustomerSelection;

  minimumAmountType: MinimumAmountType;
  minimumPurchaseAmount: number;
  minimumQuantityAmount: number;
  minimumSubTotalAmount: number;

  maxQuantityAmount: number;
  maxPurchaseAmount: number;
  maxSubTotalAmount: number;
  maxShippingRate: number;

  behaviorOnMaxReached: 'CALCULATE_UPTO' | 'EXCLUDE_DISCOUNT';

  customerIds: string[];
  productIds: string[];
  countryCodes: string[];
  bulkBuyProductIds: string[];
  bulkBuyQuantity: number;
}

export class DeleteDiscountRuleDto {
  id: string;
}

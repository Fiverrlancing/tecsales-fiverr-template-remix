/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  DiscountRuleDto,
  CreateDiscountRuleDto,
  UpdateDiscountRuleDto,
} from './discount-rule.dtos';
import {
  CreateDiscountRuleInput,
  CreateDiscountRulePayload,
  DiscountRule,
  DeleteDiscountRulePayload,
  UpdateDiscountRuleInput,
  UpdateDiscountRulePayload,
} from 'src/graphql';
import { getMockCreateDateTimes, getNextId } from 'src/db/mock-db';

export const toGQLDiscountRule = (
  discountRule: DiscountRuleDto,
): DiscountRule => {
  return {
    id: discountRule.id,
    name: discountRule.name,
    inceptsAtISO: discountRule.inceptsAtISO,
    expiresAtISO: discountRule.expiresAtISO,
    maxUsageCount: discountRule.maxUsageCount,
    currentUsageCount: discountRule.currentUsageCount,
    canUseWithOtherDiscounts: discountRule.canUseWithOtherDiscounts,
    limitPerCustomer: discountRule.limitPerCustomer,
    limitPerOrder: discountRule.limitPerOrder,
    //@ts-ignore
    calculateOn: discountRule.calculateOn,
    //@ts-ignore
    type: discountRule.type,
    discountValue: discountRule.discountValue,
    //@ts-ignore
    productSelection: discountRule.productSelection,
    //@ts-ignore
    customerSelection: discountRule.customerSelection,
    //@ts-ignore
    minimumAmountType: discountRule.minimumAmountType,
    minimumPurchaseAmount: discountRule.minimumPurchaseAmount,
    minimumQuantityAmount: discountRule.minimumQuantityAmount,
    minimumSubTotalAmount: discountRule.minimumSubTotalAmount,
    maxQuantityAmount: discountRule.maxQuantityAmount,
    maxPurchaseAmount: discountRule.maxPurchaseAmount,
    maxSubTotalAmount: discountRule.maxSubTotalAmount,
    maxShippingRate: discountRule.maxShippingRate,
    //@ts-ignore
    behaviorOnMaxReached: discountRule.behaviorOnMaxReached,
    customerIds: discountRule.customerIds,
    productIds: discountRule.productIds,
    countryCodes: discountRule.countryCodes,
    bulkBuyProductIds: discountRule.bulkBuyProductIds,
    bulkBuyQuantity: discountRule.bulkBuyQuantity,
    createdAtISO: discountRule.createdAtISO,
    updatedAtISO: discountRule.updatedAtISO,
    deletedAtISO: discountRule.deletedAtISO,
  };
};

// QUERY

export const fromGQLDiscountRule = (
  discountRule: DiscountRule,
): DiscountRuleDto => {
  return {
    id: discountRule.id,
    name: discountRule.name,
    inceptsAtISO: discountRule.inceptsAtISO,
    expiresAtISO: discountRule.expiresAtISO,
    maxUsageCount: discountRule.maxUsageCount,
    currentUsageCount: discountRule.currentUsageCount,
    canUseWithOtherDiscounts: discountRule.canUseWithOtherDiscounts,
    limitPerCustomer: discountRule.limitPerCustomer,
    limitPerOrder: discountRule.limitPerOrder,
    calculateOn: discountRule.calculateOn,
    type: discountRule.type,
    discountValue: discountRule.discountValue,
    productSelection: discountRule.productSelection,
    customerSelection: discountRule.customerSelection,
    minimumAmountType: discountRule.minimumAmountType,
    minimumPurchaseAmount: discountRule.minimumPurchaseAmount,
    minimumQuantityAmount: discountRule.minimumQuantityAmount,
    minimumSubTotalAmount: discountRule.minimumSubTotalAmount,
    maxQuantityAmount: discountRule.maxQuantityAmount,
    maxPurchaseAmount: discountRule.maxPurchaseAmount,
    maxSubTotalAmount: discountRule.maxSubTotalAmount,
    maxShippingRate: discountRule.maxShippingRate,
    behaviorOnMaxReached: discountRule.behaviorOnMaxReached,
    customerIds: discountRule.customerIds,
    productIds: discountRule.productIds,
    countryCodes: discountRule.countryCodes,
    bulkBuyProductIds: discountRule.bulkBuyProductIds,
    bulkBuyQuantity: discountRule.bulkBuyQuantity,
    createdAtISO: discountRule.createdAtISO,
    updatedAtISO: discountRule.updatedAtISO,
    deletedAtISO: discountRule.deletedAtISO,
  };
};

// MUTATIONS CREATE

export const fromGQLCreateDiscountRuleInput = (
  discountRule: CreateDiscountRuleInput,
): CreateDiscountRuleDto => {
  return {
    name: discountRule.name,
    inceptsAtISO: discountRule.inceptsAtISO,
    expiresAtISO: discountRule.expiresAtISO,
    maxUsageCount: discountRule.maxUsageCount,
    currentUsageCount: discountRule.currentUsageCount,
    canUseWithOtherDiscounts: discountRule.canUseWithOtherDiscounts,
    limitPerCustomer: discountRule.limitPerCustomer,
    limitPerOrder: discountRule.limitPerOrder,
    calculateOn: discountRule.calculateOn,
    type: discountRule.type,
    discountValue: discountRule.discountValue,
    productSelection: discountRule.productSelection,
    customerSelection: discountRule.customerSelection,
    minimumAmountType: discountRule.minimumAmountType,
    minimumPurchaseAmount: discountRule.minimumPurchaseAmount,
    minimumQuantityAmount: discountRule.minimumQuantityAmount,
    minimumSubTotalAmount: discountRule.minimumSubTotalAmount,
    maxQuantityAmount: discountRule.maxQuantityAmount,
    maxPurchaseAmount: discountRule.maxPurchaseAmount,
    maxSubTotalAmount: discountRule.maxSubTotalAmount,
    maxShippingRate: discountRule.maxShippingRate,
    behaviorOnMaxReached: discountRule.behaviorOnMaxReached,
    customerIds: discountRule.customerIds,
    productIds: discountRule.productIds,
    countryCodes: discountRule.countryCodes,
    bulkBuyProductIds: discountRule.bulkBuyProductIds,
    bulkBuyQuantity: discountRule.bulkBuyQuantity,
  };
};

export const fromCreateDiscountRuleDto = (
  discountRule: CreateDiscountRuleDto,
): DiscountRuleDto => {
  return {
    id: getNextId(),
    name: discountRule.name,
    inceptsAtISO: discountRule.inceptsAtISO,
    expiresAtISO: discountRule.expiresAtISO,
    maxUsageCount: discountRule.maxUsageCount,
    currentUsageCount: discountRule.currentUsageCount,
    canUseWithOtherDiscounts: discountRule.canUseWithOtherDiscounts,
    limitPerCustomer: discountRule.limitPerCustomer,
    limitPerOrder: discountRule.limitPerOrder,
    calculateOn: discountRule.calculateOn,
    type: discountRule.type,
    discountValue: discountRule.discountValue,
    productSelection: discountRule.productSelection,
    customerSelection: discountRule.customerSelection,
    minimumAmountType: discountRule.minimumAmountType,
    minimumPurchaseAmount: discountRule.minimumPurchaseAmount,
    minimumQuantityAmount: discountRule.minimumQuantityAmount,
    minimumSubTotalAmount: discountRule.minimumSubTotalAmount,
    maxQuantityAmount: discountRule.maxQuantityAmount,
    maxPurchaseAmount: discountRule.maxPurchaseAmount,
    maxSubTotalAmount: discountRule.maxSubTotalAmount,
    maxShippingRate: discountRule.maxShippingRate,
    behaviorOnMaxReached: discountRule.behaviorOnMaxReached,
    customerIds: discountRule.customerIds,
    productIds: discountRule.productIds,
    countryCodes: discountRule.countryCodes,
    bulkBuyProductIds: discountRule.bulkBuyProductIds,
    bulkBuyQuantity: discountRule.bulkBuyQuantity,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLCreateDiscountRulePayload = (
  DiscountRule: DiscountRuleDto,
): CreateDiscountRulePayload => {
  return {
    code: 201,
    message: 'Created Successfully',
    // @ts-ignore
    discountRule: toGQLDiscountRule(DiscountRule),
    success: true,
  };
};

// MUTATIONS UPDATE

export const fromGQLUpdateDiscountRuleInput = (
  discountRule: UpdateDiscountRuleInput,
): UpdateDiscountRuleDto => {
  return {
    id: discountRule.id,
    name: discountRule.name,
    inceptsAtISO: discountRule.inceptsAtISO,
    expiresAtISO: discountRule.expiresAtISO,
    maxUsageCount: discountRule.maxUsageCount,
    currentUsageCount: discountRule.currentUsageCount,
    canUseWithOtherDiscounts: discountRule.canUseWithOtherDiscounts,
    limitPerCustomer: discountRule.limitPerCustomer,
    limitPerOrder: discountRule.limitPerOrder,
    calculateOn: discountRule.calculateOn,
    type: discountRule.type,
    discountValue: discountRule.discountValue,
    productSelection: discountRule.productSelection,
    customerSelection: discountRule.customerSelection,
    minimumAmountType: discountRule.minimumAmountType,
    minimumPurchaseAmount: discountRule.minimumPurchaseAmount,
    minimumQuantityAmount: discountRule.minimumQuantityAmount,
    minimumSubTotalAmount: discountRule.minimumSubTotalAmount,
    maxQuantityAmount: discountRule.maxQuantityAmount,
    maxPurchaseAmount: discountRule.maxPurchaseAmount,
    maxSubTotalAmount: discountRule.maxSubTotalAmount,
    maxShippingRate: discountRule.maxShippingRate,
    behaviorOnMaxReached: discountRule.behaviorOnMaxReached,
    customerIds: discountRule.customerIds,
    productIds: discountRule.productIds,
    countryCodes: discountRule.countryCodes,
    bulkBuyProductIds: discountRule.bulkBuyProductIds,
    bulkBuyQuantity: discountRule.bulkBuyQuantity,
  };
};

export const fromUpdateDiscountRuleDto = (
  discountRule: UpdateDiscountRuleDto,
): DiscountRuleDto => {
  return {
    id: discountRule.id,
    name: discountRule.name,
    inceptsAtISO: discountRule.inceptsAtISO,
    expiresAtISO: discountRule.expiresAtISO,
    maxUsageCount: discountRule.maxUsageCount,
    currentUsageCount: discountRule.currentUsageCount,
    canUseWithOtherDiscounts: discountRule.canUseWithOtherDiscounts,
    limitPerCustomer: discountRule.limitPerCustomer,
    limitPerOrder: discountRule.limitPerOrder,
    calculateOn: discountRule.calculateOn,
    type: discountRule.type,
    discountValue: discountRule.discountValue,
    productSelection: discountRule.productSelection,
    customerSelection: discountRule.customerSelection,
    minimumAmountType: discountRule.minimumAmountType,
    minimumPurchaseAmount: discountRule.minimumPurchaseAmount,
    minimumQuantityAmount: discountRule.minimumQuantityAmount,
    minimumSubTotalAmount: discountRule.minimumSubTotalAmount,
    maxQuantityAmount: discountRule.maxQuantityAmount,
    maxPurchaseAmount: discountRule.maxPurchaseAmount,
    maxSubTotalAmount: discountRule.maxSubTotalAmount,
    maxShippingRate: discountRule.maxShippingRate,
    behaviorOnMaxReached: discountRule.behaviorOnMaxReached,
    customerIds: discountRule.customerIds,
    productIds: discountRule.productIds,
    countryCodes: discountRule.countryCodes,
    bulkBuyProductIds: discountRule.bulkBuyProductIds,
    bulkBuyQuantity: discountRule.bulkBuyQuantity,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLUpdateDiscountRulePayload = (
  discountRule: DiscountRuleDto,
): UpdateDiscountRulePayload => {
  return {
    code: 204,
    message: 'Updated Successfully',
    discountRule: toGQLDiscountRule(discountRule),
    success: true,
  };
};

// MUTATIONS DELETE

export const toGQLDeleteDiscountRulePayload = (
  dto: DiscountRule,
): DeleteDiscountRulePayload => {
  return {
    code: 204,
    message: 'Deleted Successfully',
    discountRule: dto,
    success: true,
  };
};

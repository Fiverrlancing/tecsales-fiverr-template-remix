
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CalculateOnType {
    LINE_ITEMS = "LINE_ITEMS",
    ORDER = "ORDER",
    SHIPPING = "SHIPPING"
}

export enum DiscountType {
    PERCENTAGE = "PERCENTAGE",
    FIXED = "FIXED",
    BUY_X_GET_Y = "BUY_X_GET_Y",
    FREE = "FREE"
}

export enum ProductSelection {
    ALL = "ALL",
    SPECIFIC = "SPECIFIC"
}

export enum CustomerSelection {
    ALL = "ALL",
    SPECIFIC = "SPECIFIC"
}

export enum MinimumAmountType {
    PURCHASE_AMOUNT = "PURCHASE_AMOUNT",
    QUANTITY = "QUANTITY"
}

export enum BehaviorOnMaxReached {
    CALCULATE_UPTO = "CALCULATE_UPTO",
    EXCLUDE_DISCOUNT = "EXCLUDE_DISCOUNT"
}

export enum MetaDataConfigParentType {
    INVENTORY_ITEM = "INVENTORY_ITEM",
    INVENTORY_VARIANT = "INVENTORY_VARIANT",
    INVENTORY_UNIT = "INVENTORY_UNIT"
}

export enum MetaDataConfigType {
    TEXT = "TEXT",
    MULTI_LINE_TEXT = "MULTI_LINE_TEXT",
    DATE = "DATE",
    DATE_AND_TIME = "DATE_AND_TIME"
}

export enum Metric {
    UNIT = "UNIT",
    GRAM = "GRAM",
    KILOGRAM = "KILOGRAM"
}

export interface CreateCompanyInput {
    name?: Nullable<string>;
    number?: Nullable<number>;
    address?: Nullable<AddressInput>;
}

export interface UpdateCompanyInput {
    id: string;
    name?: Nullable<string>;
    number?: Nullable<number>;
    address?: Nullable<AddressInput>;
}

export interface DeleteCompanyInput {
    id: string;
}

export interface CreateDiscountCodeInput {
    rule?: Nullable<CreateDiscountRuleInput>;
    code: string;
}

export interface UpdateDiscountCodeInput {
    id: string;
    rule?: Nullable<UpdateDiscountRuleInput>;
    code: string;
}

export interface DeleteDiscountCodeInput {
    id: string;
}

export interface CreateDiscountRuleInput {
    name: string;
    inceptsAtISO: string;
    expiresAtISO?: Nullable<string>;
    maxUsageCount: number;
    currentUsageCount: number;
    canUseWithOtherDiscounts: boolean;
    limitPerCustomer: number;
    limitPerOrder: number;
    calculateOn: CalculateOnType;
    type: DiscountType;
    discountValue: number;
    productSelection?: Nullable<ProductSelection>;
    customerSelection?: Nullable<CustomerSelection>;
    minimumAmountType?: Nullable<MinimumAmountType>;
    minimumPurchaseAmount?: Nullable<number>;
    minimumQuantityAmount?: Nullable<number>;
    minimumSubTotalAmount?: Nullable<number>;
    maxQuantityAmount?: Nullable<number>;
    maxPurchaseAmount?: Nullable<number>;
    maxSubTotalAmount?: Nullable<number>;
    maxShippingRate?: Nullable<number>;
    behaviorOnMaxReached?: Nullable<BehaviorOnMaxReached>;
    customerIds?: Nullable<Nullable<string>[]>;
    productIds?: Nullable<Nullable<string>[]>;
    countryCodes?: Nullable<Nullable<string>[]>;
    bulkBuyProductIds?: Nullable<Nullable<string>[]>;
    bulkBuyQuantity?: Nullable<number>;
}

export interface UpdateDiscountRuleInput {
    id: string;
    name: string;
    inceptsAtISO: string;
    expiresAtISO?: Nullable<string>;
    maxUsageCount: number;
    currentUsageCount: number;
    canUseWithOtherDiscounts: boolean;
    limitPerCustomer: number;
    limitPerOrder: number;
    calculateOn: CalculateOnType;
    type: DiscountType;
    discountValue: number;
    productSelection?: Nullable<ProductSelection>;
    customerSelection?: Nullable<CustomerSelection>;
    minimumAmountType?: Nullable<MinimumAmountType>;
    minimumPurchaseAmount?: Nullable<number>;
    minimumQuantityAmount?: Nullable<number>;
    minimumSubTotalAmount?: Nullable<number>;
    maxQuantityAmount?: Nullable<number>;
    maxPurchaseAmount?: Nullable<number>;
    maxSubTotalAmount?: Nullable<number>;
    maxShippingRate?: Nullable<number>;
    behaviorOnMaxReached?: Nullable<BehaviorOnMaxReached>;
    customerIds?: Nullable<Nullable<string>[]>;
    productIds?: Nullable<Nullable<string>[]>;
    countryCodes?: Nullable<Nullable<string>[]>;
    bulkBuyProductIds?: Nullable<Nullable<string>[]>;
    bulkBuyQuantity?: Nullable<number>;
}

export interface DeleteDiscountRuleInput {
    id: string;
}

export interface CreateMetaDataConfigInput {
    name: string;
    collection?: Nullable<string>;
    key: string;
    type: MetaDataConfigType;
    parentType: MetaDataConfigParentType;
    required: boolean;
    public: boolean;
    uiCollection?: Nullable<string>;
    isMulti: boolean;
}

export interface UpdateMetaDataConfigInput {
    id: string;
    name: string;
    collection?: Nullable<string>;
    key: string;
    type: MetaDataConfigType;
    parentType: MetaDataConfigParentType;
    required: boolean;
    public: boolean;
    uiCollection?: Nullable<string>;
    isMulti: boolean;
}

export interface DeleteMetaDataConfigInput {
    id: string;
}

export interface CreateReviewInput {
    text: string;
    rating: number;
    showName: boolean;
    orderId: string;
    productId: string;
    salesChannelId: string;
}

export interface UpdateReviewInput {
    id: string;
    text: string;
    rating: number;
    showName: boolean;
    orderId: string;
    productId: string;
    salesChannelId: string;
}

export interface DeleteReviewInput {
    id: string;
}

export interface CreateInventoryTransferInput {
    vendorReference: string;
    customerReference: string;
    originId: string;
    destinationId: string;
    expectedDeliveryDateISO: string;
    trackingCarrierId: string;
    trackingCode: string;
    items: Nullable<CreateInventoryTransferItemInput>[];
    trackingUrl?: Nullable<string>;
}

export interface CreateInventoryBatchInput {
    reference: string;
    name: string;
    description: string;
    quantity: number;
    inventoryVariantId: string;
    expirationISO: string;
    inceptionISO: string;
}

export interface CreateInventoryTransferItemInput {
    inventoryVariantId: string;
    inventoryUnitId: string;
    quantity: QuantityInput;
}

export interface UpdateInventoryTransferItemInput {
    id?: Nullable<string>;
    inventoryVariantId: string;
    inventoryUnitId: string;
    quantity: QuantityInput;
}

export interface QuantityInput {
    amount?: Nullable<number>;
    metric: Metric;
}

export interface UpdateInventoryTransferInput {
    id: string;
    vendorReference: string;
    customerReference: string;
    originId: string;
    destinationId: string;
    expectedDeliveryDateISO: string;
    trackingCarrierId: string;
    trackingCode: string;
    items: Nullable<UpdateInventoryTransferItemInput>[];
    trackingUrl?: Nullable<string>;
}

export interface DeleteInventoryTransferInput {
    id: string;
}

export interface UpdateInventoryBatchInput {
    id: string;
    reference: string;
    name: string;
    description: string;
    quantity: number;
    inventoryVariantId: string;
    expirationISO: string;
    inceptionISO: string;
}

export interface DeleteInventoryBatchInput {
    id: string;
}

export interface AddressInput {
    line1: string;
    line2?: Nullable<string>;
    line3?: Nullable<string>;
    townCity: string;
    country: string;
    postZipCode: string;
    provinceCode: string;
    isDefault: boolean;
}

export interface PostageAddressInput {
    recipientName: string;
    line1: string;
    line2?: Nullable<string>;
    line3?: Nullable<string>;
    townCity: string;
    country: string;
    postZipCode: string;
    provinceCode: string;
    isDefault: boolean;
}

export interface Company {
    id: string;
    name?: Nullable<string>;
    number?: Nullable<number>;
    address?: Nullable<Address>;
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface CreateCompanyPayload {
    message: string;
    success: boolean;
    code: number;
    company?: Nullable<Company>;
}

export interface UpdateCompanyPayload {
    message: string;
    success: boolean;
    code: number;
    company?: Nullable<Company>;
}

export interface SearchCompanyPayload {
    message: string;
    success: boolean;
    code: number;
    company?: Nullable<Nullable<Company>[]>;
}

export interface DeleteCompanyPayload {
    message: string;
    success: boolean;
    code: number;
    company?: Nullable<Company>;
}

export interface IQuery {
    getCompanys(): Company[] | Promise<Company[]>;
    getCompany(id?: Nullable<string>): Nullable<Company> | Promise<Nullable<Company>>;
    searchCompany(input?: Nullable<string>): Nullable<SearchCompanyPayload> | Promise<Nullable<SearchCompanyPayload>>;
    getDiscountCodes(): DiscountCode[] | Promise<DiscountCode[]>;
    getDiscountCode(id?: Nullable<string>): Nullable<DiscountCode> | Promise<Nullable<DiscountCode>>;
    searchDiscountCode(input?: Nullable<string>): Nullable<SearchDiscountCodePayload> | Promise<Nullable<SearchDiscountCodePayload>>;
    getDiscountRules(): DiscountRule[] | Promise<DiscountRule[]>;
    getDiscountRule(id?: Nullable<string>): Nullable<DiscountRule> | Promise<Nullable<DiscountRule>>;
    searchDiscountRule(input?: Nullable<string>): Nullable<SearchDiscountRulePayload> | Promise<Nullable<SearchDiscountRulePayload>>;
    getMetaDataConfigs(): Nullable<Nullable<MetaDataConfig>[]> | Promise<Nullable<Nullable<MetaDataConfig>[]>>;
    getMetaDataConfig(id?: Nullable<string>): Nullable<MetaDataConfig> | Promise<Nullable<MetaDataConfig>>;
    getReviews(): Review[] | Promise<Review[]>;
    getReview(id?: Nullable<string>): Nullable<Review> | Promise<Nullable<Review>>;
    searchReview(input?: Nullable<string>): Nullable<SearchReviewPayload> | Promise<Nullable<SearchReviewPayload>>;
    getInventoryTransfer(id?: Nullable<string>): Nullable<InventoryTransfer> | Promise<Nullable<InventoryTransfer>>;
    getInventoryBatch(id?: Nullable<string>): Nullable<InventoryBatch> | Promise<Nullable<InventoryBatch>>;
}

export interface IMutation {
    createCompany(input?: Nullable<CreateCompanyInput>): Nullable<CreateCompanyPayload> | Promise<Nullable<CreateCompanyPayload>>;
    updateCompany(input?: Nullable<UpdateCompanyInput>): Nullable<UpdateCompanyPayload> | Promise<Nullable<UpdateCompanyPayload>>;
    deleteCompany(input?: Nullable<DeleteCompanyInput>): Nullable<DeleteCompanyPayload> | Promise<Nullable<DeleteCompanyPayload>>;
    createDiscountCode(input?: Nullable<CreateDiscountCodeInput>): Nullable<CreateDiscountCodePayload> | Promise<Nullable<CreateDiscountCodePayload>>;
    updateDiscountCode(input?: Nullable<UpdateDiscountCodeInput>): Nullable<UpdateDiscountCodePayload> | Promise<Nullable<UpdateDiscountCodePayload>>;
    deleteDiscountCode(input?: Nullable<DeleteDiscountCodeInput>): Nullable<DeleteDiscountCodePayload> | Promise<Nullable<DeleteDiscountCodePayload>>;
    createDiscountRule(input?: Nullable<CreateDiscountRuleInput>): Nullable<CreateDiscountRulePayload> | Promise<Nullable<CreateDiscountRulePayload>>;
    updateDiscountRule(input?: Nullable<UpdateDiscountRuleInput>): Nullable<UpdateDiscountRulePayload> | Promise<Nullable<UpdateDiscountRulePayload>>;
    deleteDiscountRule(input?: Nullable<DeleteDiscountRuleInput>): Nullable<DeleteDiscountRulePayload> | Promise<Nullable<DeleteDiscountRulePayload>>;
    createMetaDataConfig(input?: Nullable<CreateMetaDataConfigInput>): Nullable<CreateMetaDataConfigPayload> | Promise<Nullable<CreateMetaDataConfigPayload>>;
    updateMetaDataConfig(input?: Nullable<UpdateMetaDataConfigInput>): Nullable<UpdateMetaDataConfigPayload> | Promise<Nullable<UpdateMetaDataConfigPayload>>;
    deleteMetaDataConfig(input?: Nullable<DeleteMetaDataConfigInput>): Nullable<DeleteMetaDataConfigPayload> | Promise<Nullable<DeleteMetaDataConfigPayload>>;
    createReview(input?: Nullable<CreateReviewInput>): Nullable<CreateReviewPayload> | Promise<Nullable<CreateReviewPayload>>;
    updateReview(input?: Nullable<UpdateReviewInput>): Nullable<UpdateReviewPayload> | Promise<Nullable<UpdateReviewPayload>>;
    deleteReview(input?: Nullable<DeleteReviewInput>): Nullable<DeleteReviewPayload> | Promise<Nullable<DeleteReviewPayload>>;
    createInventoryTransfer(input: CreateInventoryTransferInput): CreateInventoryTransferPayload | Promise<CreateInventoryTransferPayload>;
    updateInventoryTransfer(input: UpdateInventoryTransferInput): UpdateInventoryTransferPayload | Promise<UpdateInventoryTransferPayload>;
    deleteInventoryTransfer(input: DeleteInventoryTransferInput): DeleteInventoryTransferPayload | Promise<DeleteInventoryTransferPayload>;
    createInventoryBatch(input: CreateInventoryBatchInput): CreateInventoryBatchPayload | Promise<CreateInventoryBatchPayload>;
    updateInventoryBatch(input: UpdateInventoryBatchInput): UpdateInventoryBatchPayload | Promise<UpdateInventoryBatchPayload>;
    deleteInventoryBatch(input: DeleteInventoryBatchInput): DeleteInventoryBatchPayload | Promise<DeleteInventoryBatchPayload>;
}

export interface DiscountCode {
    id: string;
    rule?: Nullable<DiscountRule>;
    code: string;
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface CreateDiscountCodePayload {
    message: string;
    success: boolean;
    code: number;
    DiscountCode?: Nullable<DiscountCode>;
}

export interface UpdateDiscountCodePayload {
    message: string;
    success: boolean;
    code: number;
    discountCode?: Nullable<DiscountCode>;
}

export interface SearchDiscountCodePayload {
    message: string;
    success: boolean;
    code: number;
    discountCode?: Nullable<Nullable<DiscountCode>[]>;
}

export interface DeleteDiscountCodePayload {
    message: string;
    success: boolean;
    code: number;
    discountCode?: Nullable<DiscountCode>;
}

export interface DiscountRule {
    id: string;
    name: string;
    inceptsAtISO: string;
    expiresAtISO?: Nullable<string>;
    maxUsageCount: number;
    currentUsageCount: number;
    canUseWithOtherDiscounts: boolean;
    limitPerCustomer: number;
    limitPerOrder: number;
    calculateOn: CalculateOnType;
    type: DiscountType;
    discountValue: number;
    productSelection?: Nullable<ProductSelection>;
    customerSelection?: Nullable<CustomerSelection>;
    minimumAmountType?: Nullable<MinimumAmountType>;
    minimumPurchaseAmount?: Nullable<number>;
    minimumQuantityAmount?: Nullable<number>;
    minimumSubTotalAmount?: Nullable<number>;
    maxQuantityAmount?: Nullable<number>;
    maxPurchaseAmount?: Nullable<number>;
    maxSubTotalAmount?: Nullable<number>;
    maxShippingRate?: Nullable<number>;
    behaviorOnMaxReached?: Nullable<BehaviorOnMaxReached>;
    customerIds?: Nullable<Nullable<string>[]>;
    productIds?: Nullable<Nullable<string>[]>;
    countryCodes?: Nullable<Nullable<string>[]>;
    bulkBuyProductIds?: Nullable<Nullable<string>[]>;
    bulkBuyQuantity?: Nullable<number>;
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface CreateDiscountRulePayload {
    message: string;
    success: boolean;
    code: number;
    DiscountRule?: Nullable<DiscountRule>;
}

export interface UpdateDiscountRulePayload {
    message: string;
    success: boolean;
    code: number;
    discountRule?: Nullable<DiscountRule>;
}

export interface SearchDiscountRulePayload {
    message: string;
    success: boolean;
    code: number;
    discountRule?: Nullable<Nullable<DiscountRule>[]>;
}

export interface DeleteDiscountRulePayload {
    message: string;
    success: boolean;
    code: number;
    discountRule?: Nullable<DiscountRule>;
}

export interface MetaDataConfig {
    id: string;
    name: string;
    collection?: Nullable<string>;
    key: string;
    type: MetaDataConfigType;
    parentType: MetaDataConfigParentType;
    required: boolean;
    public: boolean;
    uiCollection?: Nullable<string>;
    isMulti: boolean;
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface CreateMetaDataConfigPayload {
    message: string;
    success: boolean;
    code: number;
    metaDataConfig?: Nullable<MetaDataConfig>;
}

export interface UpdateMetaDataConfigPayload {
    message: string;
    success: boolean;
    code: number;
    metaDataConfig?: Nullable<MetaDataConfig>;
}

export interface DeleteMetaDataConfigPayload {
    message: string;
    success: boolean;
    code: number;
    metaDataConfig?: Nullable<MetaDataConfig>;
}

export interface Review {
    id: string;
    text: string;
    rating: number;
    accountId: string;
    showName: boolean;
    orderId: string;
    productId: string;
    salesChannelId: string;
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface CreateReviewPayload {
    message: string;
    success: boolean;
    code: number;
    Review?: Nullable<Review>;
}

export interface UpdateReviewPayload {
    message: string;
    success: boolean;
    code: number;
    review?: Nullable<Review>;
}

export interface SearchReviewPayload {
    message: string;
    success: boolean;
    code: number;
    review?: Nullable<Nullable<Review>[]>;
}

export interface DeleteReviewPayload {
    message: string;
    success: boolean;
    code: number;
    review?: Nullable<Review>;
}

export interface InventoryTransfer {
    id: string;
    vendorReference: string;
    customerReference: string;
    originId: string;
    destinationId: string;
    expectedDeliveryDateISO: string;
    trackingCarrierId: string;
    trackingCode: string;
    trackingUrl: string;
    items: Nullable<InventoryTransferItemDto>[];
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface InventoryTransferItemDto {
    id: string;
    inventoryTransferId: string;
    inventoryVariantId: string;
    inventoryUnitId: string;
    quantity: Quantity;
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface InventoryBatch {
    id: string;
    reference: string;
    name: string;
    description: string;
    quantity: number;
    inventoryVariantId: string;
    inceptionISO: string;
    expirationISO: string;
    createdAtISO: string;
    updatedAtISO: string;
    deletedAtISO: string;
}

export interface Quantity {
    amount: number;
    metric: Metric;
}

export interface CreateInventoryTransferPayload {
    message?: Nullable<string>;
    success?: Nullable<boolean>;
    code?: Nullable<number>;
    inventoryTransfer?: Nullable<InventoryTransfer>;
}

export interface Address {
    line1: string;
    line2?: Nullable<string>;
    line3?: Nullable<string>;
    townCity: string;
    country: string;
    postZipCode: string;
    provinceCode: string;
    isDefault: boolean;
}

export interface PostageAddress {
    recipientName: string;
    line1: string;
    line2?: Nullable<string>;
    line3?: Nullable<string>;
    townCity: string;
    country: string;
    postZipCode: string;
    provinceCode: string;
    isDefault: boolean;
}

export interface UpdateInventoryTransferPayload {
    message?: Nullable<string>;
    success?: Nullable<boolean>;
    code?: Nullable<number>;
    inventoryTransfer?: Nullable<InventoryTransfer>;
}

export interface DeleteInventoryTransferPayload {
    message?: Nullable<string>;
    success?: Nullable<boolean>;
    code?: Nullable<number>;
    inventoryTransfer?: Nullable<InventoryTransfer>;
}

export interface CreateInventoryBatchPayload {
    message?: Nullable<string>;
    success?: Nullable<boolean>;
    code?: Nullable<number>;
    inventoryBatch?: Nullable<InventoryBatch>;
}

export interface UpdateInventoryBatchPayload {
    message?: Nullable<string>;
    success?: Nullable<boolean>;
    code?: Nullable<number>;
    inventoryBatch?: Nullable<InventoryBatch>;
}

export interface DeleteInventoryBatchPayload {
    message?: Nullable<string>;
    success?: Nullable<boolean>;
    code?: Nullable<number>;
    inventoryBatch?: Nullable<InventoryBatch>;
}

type Nullable<T> = T | null;

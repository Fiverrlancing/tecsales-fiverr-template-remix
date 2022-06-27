export class CreateInventoryTransferDto {
  constructor(
    vendorReference: string,
    customerReference: string,
    originId: string,
    destinationId: string,
    expectedDeliveryDateISO: string,
    trackingCarrierId: string,
    trackingCode: string,
    items: CreateInventoryTransferItemDto[],
    trackingUrl?: string,
  ) {
    // text input
    this.vendorReference = vendorReference;
    // text input
    this.customerReference = customerReference;
    // search field with one hard coded returned result: { locationId: 1 (this is origin), name: 'Location 1' }
    this.originId = originId;
    // search field with one hard coded returned result: { locationId: 1 (this is origin), name: 'Location 1' }
    this.destinationId = destinationId;
    // date picker - any library you want to use
    this.expectedDeliveryDateISO = expectedDeliveryDateISO;
    // search field with one hard coded returned result: { carrierId: 1, name: 'Carrier 1' }
    this.trackingCarrierId = trackingCarrierId;
    // text input
    this.trackingCode = trackingCode;
    // text input
    this.trackingUrl = trackingUrl;
    // this should have a + button which allows adding multiple items
    this.items = items;
  }

  vendorReference: string;
  customerReference: string;
  originId: string;
  destinationId: string;
  expectedDeliveryDateISO: string;
  trackingCarrierId: string;
  trackingCode: string;
  trackingUrl?: string;
  items: CreateInventoryTransferItemDto[];
}

export class CreateInventoryTransferItemDto {
  constructor(
    inventoryVariantId: string,
    inventoryUnitId: string,
    quantity: Quantity,
  ) {
    this.inventoryVariantId = inventoryVariantId;
    this.inventoryUnitId = inventoryUnitId;
    this.quantity = quantity;
  }

  // search field with one hard coded returned result: { variantId: 1, name: 'Variant 1' }
  inventoryVariantId: string;
  // not in form. hard code to 1 when sending request
  inventoryUnitId: string;
  // amount should be a number text field, metric should be a dropdown with options: [ { id: 1, label: 'units', }, { id: 2, label: kg }]
  quantity: Quantity;
}

export type InventoryTransferDto = {
  id: string;
  vendorReference: string;
  customerReference: string;
  originId: string;
  destinationId: string;
  expectedDeliveryDateISO: string;
  trackingCarrierId: string;
  trackingCode: string;
  trackingUrl: string;
  items: InventoryTransferItemDto[];
  createdAtISO: string;
  updatedAtISO: string;
  deletedAtISO: string;
};

export class InventoryTransferItemDto {
  id: string;
  inventoryTransferId: string;
  inventoryVariantId: string;
  inventoryUnitId: string;
  quantity: Quantity;
  createdAtISO: string;
  updatedAtISO: string;
  deletedAtISO: string;
}

export class UpdateInventoryTransferDto {
  constructor(
    id: string,
    vendorReference: string,
    customerReference: string,
    originId: string,
    destinationId: string,
    expectedDeliveryDateISO: string,
    trackingCarrierId: string,
    trackingCode: string,
    items: UpdateInventoryTransferItemDto[],
    trackingUrl?: string,
  ) {
    this.id = id;
    this.vendorReference = vendorReference;
    this.customerReference = customerReference;
    this.originId = originId;
    this.destinationId = destinationId;
    this.expectedDeliveryDateISO = expectedDeliveryDateISO;
    this.trackingCarrierId = trackingCarrierId;
    this.trackingCode = trackingCode;
    this.trackingUrl = trackingUrl;
    this.items = items;
  }

  id: string;
  vendorReference: string;
  customerReference: string;
  originId: string;
  destinationId: string;
  expectedDeliveryDateISO: string;
  trackingCarrierId: string;
  trackingCode: string;
  trackingUrl?: string;
  items: UpdateInventoryTransferItemDto[];
}

export class UpdateInventoryTransferItemDto {
  constructor(
    id: string,
    inventoryTransferId: string,
    inventoryVariantId: string,
    inventoryUnitId: string,
    quantity: Quantity,
  ) {
    this.id = id;
    this.inventoryTransferId = inventoryTransferId;
    this.inventoryVariantId = inventoryVariantId;
    this.inventoryUnitId = inventoryUnitId;
    this.quantity = quantity;
  }

  id: string;
  inventoryTransferId: string;
  inventoryVariantId: string;
  inventoryUnitId: string;
  quantity: Quantity;
}

export default class DeleteInventoryTransferItemDto {
  constructor(id: string) {
    this.id = id;
  }

  id: string;
}

export type Quantity = {
  amount: number;
  metric: Metric;
};

export enum Metric {
  UNIT,
  GRAM,
  KILOGRAM,
}

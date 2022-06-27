import {
  CreateInventoryTransferDto,
  CreateInventoryTransferItemDto,
  InventoryTransferDto,
  InventoryTransferItemDto,
  UpdateInventoryTransferDto,
  UpdateInventoryTransferItemDto,
} from './inventory-transfer.dtos';
import {
  CreateInventoryTransferInput,
  CreateInventoryTransferPayload,
  UpdateInventoryTransferInput,
  UpdateInventoryTransferPayload,
  InventoryTransfer,
  Metric,
  DeleteInventoryTransferPayload,
} from 'src/graphql';
import { getMockCreateDateTimes, getNextId } from 'src/db/mock-db';

export const mockInventoryTransfer: InventoryTransfer = {
  id: '1',
  createdAtISO: 'createdAtISO',
  customerReference: 'customerReference',
  deletedAtISO: 'deletedAtISO',
  destinationId: 'destinationId',
  expectedDeliveryDateISO: new Date().toISOString(),
  items: [
    {
      id: '1',
      createdAtISO: 'createdAtISO',
      deletedAtISO: 'deletedAtISO',
      inventoryTransferId: 'inventoryTransferId',
      inventoryUnitId: 'inventoryUnitId',
      inventoryVariantId: '1',
      quantity: { amount: 1231, metric: Metric.KILOGRAM },
      updatedAtISO: 'updatedAtISO',
    },
  ],
  originId: 'originId',
  trackingCarrierId: 'trackingCarrierId',
  trackingCode: 'trackingCode',
  trackingUrl: 'trackingUrl',
  updatedAtISO: 'updatedAtISO',
  vendorReference: 'vendorReference',
};

export const fromCreateInventoryTransferDto = (
  dto: CreateInventoryTransferDto,
): InventoryTransferDto => {
  const id = getNextId();

  const transfer: InventoryTransferDto = {
    id,
    ...getMockCreateDateTimes(),
    customerReference: dto.customerReference,
    destinationId: dto.destinationId,
    expectedDeliveryDateISO: dto.expectedDeliveryDateISO,
    items: dto.items.map((item) => {
      return {
        id: getNextId(),
        inventoryTransferId: id,
        ...getMockCreateDateTimes(),
        inventoryUnitId: item.inventoryUnitId,
        inventoryVariantId: item.inventoryVariantId,
        quantity: {
          amount: item.quantity.amount,
          metric: item.quantity.metric,
        },
      };
    }),
    originId: dto.originId,
    trackingCarrierId: dto.trackingCarrierId,
    trackingCode: dto.trackingCode,
    trackingUrl: dto.trackingUrl,
    vendorReference: dto.vendorReference,
  };

  return transfer;
};

export const fromGQLCreateInventoryTransferInput = (
  transfer: CreateInventoryTransferInput,
): CreateInventoryTransferDto => {
  const items: CreateInventoryTransferItemDto[] = transfer.items.map(
    (value) => {
      return {
        inventoryUnitId: value.inventoryUnitId,
        inventoryVariantId: value.inventoryVariantId,
        quantity: {
          amount: value.quantity.amount,
          metric: value.quantity.metric,
        },
      };
    },
  );

  const dto: CreateInventoryTransferDto = {
    customerReference: transfer.customerReference,
    destinationId: transfer.destinationId,
    expectedDeliveryDateISO: transfer.expectedDeliveryDateISO,
    items,
    originId: transfer.originId,
    trackingCarrierId: transfer.trackingCarrierId,
    trackingCode: transfer.trackingCode,
    trackingUrl: transfer.trackingUrl,
    vendorReference: transfer.vendorReference,
  };

  return dto;
};

export const fromGQLInventoryTransfer = (
  transfer: InventoryTransfer,
): InventoryTransferDto => {
  return {
    id: transfer.id,
    createdAtISO: transfer.createdAtISO,
    customerReference: transfer.customerReference,
    deletedAtISO: transfer.deletedAtISO,
    destinationId: transfer.destinationId,
    expectedDeliveryDateISO: transfer.expectedDeliveryDateISO,
    items: transfer.items,
    originId: transfer.originId,
    trackingCarrierId: transfer.trackingCarrierId,
    trackingCode: transfer.trackingCode,
    trackingUrl: transfer.trackingUrl,
    updatedAtISO: transfer.updatedAtISO,
    vendorReference: transfer.vendorReference,
  };
};

export const toGQLInventoryTransfer = (
  transfer: InventoryTransferDto,
): InventoryTransfer => {
  return {
    id: transfer.id,
    createdAtISO: transfer.createdAtISO,
    customerReference: transfer.customerReference,
    deletedAtISO: transfer.deletedAtISO,
    destinationId: transfer.destinationId,
    expectedDeliveryDateISO: transfer.expectedDeliveryDateISO,
    items: transfer.items,
    originId: transfer.originId,
    trackingCarrierId: transfer.trackingCarrierId,
    trackingCode: transfer.trackingCode,
    trackingUrl: transfer.trackingUrl,
    updatedAtISO: transfer.updatedAtISO,
    vendorReference: transfer.vendorReference,
  };
};

export const toGQLCreateInventoryTransferPayload = (
  transfer: InventoryTransferDto,
): CreateInventoryTransferPayload => {
  return {
    code: 201,
    message: 'Created Successfully',
    inventoryTransfer: toGQLInventoryTransfer(transfer),
    success: true,
  };
};

export const fromUpdateInventoryTransferDto = (
  transfer: UpdateInventoryTransferDto,
): InventoryTransferDto => {
  return {
    id: transfer.id,
    customerReference: transfer.customerReference,
    destinationId: transfer.destinationId,
    expectedDeliveryDateISO: transfer.expectedDeliveryDateISO,
    originId: transfer.originId,
    trackingCarrierId: transfer.trackingCarrierId,
    trackingCode: transfer.trackingCode,
    trackingUrl: transfer.trackingUrl,
    vendorReference: transfer.vendorReference,
    items: transfer.items.map((value) => {
      return {
        id: value.id,
        inventoryTransferId: '1',
        inventoryUnitId: value.inventoryUnitId,
        inventoryVariantId: value.inventoryVariantId,
        quantity: {
          amount: value.quantity.amount,
          metric: value.quantity.metric,
        },
        ...getMockCreateDateTimes(),
      };
    }),
    ...getMockCreateDateTimes(),
  };
};

export const fromGQLUpdateInventoryTransferInput = (
  transfer: UpdateInventoryTransferInput,
): UpdateInventoryTransferDto => {
  const items: UpdateInventoryTransferItemDto[] = transfer.items.map(
    (value) => {
      return {
        id: value.id,
        inventoryTransferId: '1',
        inventoryUnitId: value.inventoryUnitId,
        inventoryVariantId: value.inventoryVariantId,
        quantity: {
          amount: value.quantity.amount,
          metric: value.quantity.metric,
        },
      };
    },
  );

  return {
    id: transfer.id,
    customerReference: transfer.customerReference,
    destinationId: transfer.destinationId,
    expectedDeliveryDateISO: transfer.expectedDeliveryDateISO,
    items,
    originId: transfer.originId,
    trackingCarrierId: transfer.trackingCarrierId,
    trackingCode: transfer.trackingCode,
    trackingUrl: transfer.trackingUrl,
    vendorReference: transfer.vendorReference,
  };
};

export const toGQLUpdateInventoryTransferPayload = (
  transfer: InventoryTransferDto,
): UpdateInventoryTransferPayload => {
  return {
    code: 204,
    message: 'Updated Successfully',
    inventoryTransfer: toGQLInventoryTransfer(transfer),
    success: true,
  };
};

export const toGQLDeleteInventoryTransferPayload = (
  transfer: InventoryTransferDto,
): DeleteInventoryTransferPayload => {
  return {
    code: 204,
    message: 'Deleted Successfully',
    inventoryTransfer: transfer,
    success: true,
  };
};

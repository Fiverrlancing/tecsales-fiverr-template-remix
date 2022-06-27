import {
  CreateInventoryBatchDto,
  DeleteInventoryBatchDto,
  InventoryBatchDto,
  UpdateInventoryBatchDto,
} from './inventory-batch.dtos';
import {
  CreateInventoryBatchInput,
  CreateInventoryBatchPayload,
  UpdateInventoryBatchInput,
  UpdateInventoryBatchPayload,
  InventoryBatch,
  DeleteInventoryBatchPayload,
  DeleteInventoryBatchInput,
} from 'src/graphql';
import { getMockCreateDateTimes, getNextId } from 'src/db/mock-db';

export const fromGQLCreateInventoryBatchInput = (
  batch: CreateInventoryBatchInput,
): CreateInventoryBatchDto => {
  return {
    reference: batch.reference,
    name: batch.name,
    description: batch.description,
    quantity: batch.quantity,
    inventoryVariantId: batch.inventoryVariantId,
    expirationISO: batch.expirationISO,
    inceptionISO: batch.inceptionISO,
  };
};

export const fromCreateInventoryBatchDto = (
  batch: CreateInventoryBatchDto,
): InventoryBatchDto => {
  return {
    id: getNextId(),
    reference: batch.reference,
    name: batch.name,
    description: batch.description,
    quantity: batch.quantity,
    inventoryVariantId: batch.inventoryVariantId,
    expirationISO: batch.expirationISO,
    ...getMockCreateDateTimes(),
    inceptionISO: batch.inceptionISO,
  };
};

export const fromUpdateInventoryBatchDto = (
  batch: UpdateInventoryBatchDto,
): InventoryBatchDto => {
  return {
    id: batch.id,
    reference: batch.reference,
    name: batch.name,
    description: batch.description,
    quantity: batch.quantity,
    inventoryVariantId: batch.inventoryVariantId,
    expirationISO: batch.expirationISO,
    ...getMockCreateDateTimes(),
    inceptionISO: batch.inceptionISO,
  };
};

export const fromGQLInventoryBatch = (
  batch: InventoryBatch,
): InventoryBatchDto => {
  return {
    id: batch.id,
    name: batch.name,
    description: batch.description,
    inventoryVariantId: batch.inventoryVariantId,
    reference: batch.reference,
    quantity: batch.quantity,
    updatedAtISO: batch.updatedAtISO,
    createdAtISO: batch.createdAtISO,
    deletedAtISO: batch.deletedAtISO,
    expirationISO: batch.expirationISO,
    inceptionISO: batch.inceptionISO,
  };
};

export const toGQLInventoryBatch = (
  batch: InventoryBatchDto,
): InventoryBatch => {
  return {
    id: batch.id,
    name: batch.name,
    description: batch.description,
    inventoryVariantId: batch.inventoryVariantId,
    reference: batch.reference,
    quantity: batch.quantity,
    updatedAtISO: batch.updatedAtISO,
    createdAtISO: batch.createdAtISO,
    deletedAtISO: batch.deletedAtISO,
    expirationISO: batch.expirationISO,
    inceptionISO: batch.inceptionISO,
  };
};

export const toGQLCreateInventoryBatchPayload = (
  Batch: InventoryBatchDto,
): CreateInventoryBatchPayload => {
  return {
    code: 201,
    message: 'Created Successfully',
    inventoryBatch: toGQLInventoryBatch(Batch),
    success: true,
  };
};

export const fromGQLUpdateInventoryBatchInput = (
  batch: UpdateInventoryBatchInput,
): UpdateInventoryBatchDto => {
  return {
    id: batch.id,
    reference: batch.reference,
    name: batch.name,
    description: batch.description,
    quantity: batch.quantity,
    inventoryVariantId: batch.inventoryVariantId,
    expirationISO: batch.expirationISO,
    inceptionISO: batch.inceptionISO,
  };
};

export const toGQLUpdateInventoryBatchPayload = (
  batch: InventoryBatchDto,
): UpdateInventoryBatchPayload => {
  return {
    code: 204,
    message: 'Updated Successfully',
    inventoryBatch: toGQLInventoryBatch(batch),
    success: true,
  };
};

export const toGQLDeleteInventoryBatchPayload = (
  dto: InventoryBatch,
): DeleteInventoryBatchPayload => {
  return {
    code: 204,
    message: 'Deleted Successfully',
    inventoryBatch: dto,
    success: true,
  };
};

export const fromGQLDeleteInventoryBatchInput = (
  input: DeleteInventoryBatchInput,
): DeleteInventoryBatchDto => {
  return {
    id: input.id,
  };
};

import { InventoryBatchDto } from 'src/inventory-batch/inventory-batch.dtos';
import { InventoryTransferDto } from 'src/inventory-transfer/inventory-transfer.dtos';
import { CompanyDto } from 'src/companies/companies.dtos';

type Entity = 'INVENTORY_TRANSFER' | 'INVENTORY_BATCH' | 'COMPANY';

type DatabaseStore = {
  [key in Entity]: {
    [id: string]: EntityObject;
  };
};

let nextId = 1;

export const getNextId = () => `${nextId++}`;

export const getMockCreateDateTimes = () => {
  return {
    createdAtISO: new Date().toISOString(),
    updatedAtISO: new Date().toISOString(),
    deletedAtISO: '',
  };
};

const db: DatabaseStore = {
  INVENTORY_BATCH: {},
  INVENTORY_TRANSFER: {},
  COMPANY: {},
};

type EntityObject = InventoryBatchDto | InventoryTransferDto | CompanyDto;

export const findInDb = <T extends EntityObject>(entity: Entity, id: string) =>
  db[entity][id] as T;

export const storeToDb = (entity: Entity, id: string, data: EntityObject) =>
  (db[entity][id] = data);

export const updateInDb = storeToDb;

export const deleteFromDb = <T extends EntityObject>(
  entity: Entity,
  id: string,
) => {
  const item = db[entity][id];
  delete db[entity][id];
  return item as T;
};

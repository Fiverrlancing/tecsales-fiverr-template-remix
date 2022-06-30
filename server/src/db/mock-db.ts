import { InventoryBatchDto } from 'src/inventory-batch/inventory-batch.dtos';
import { InventoryTransferDto } from 'src/inventory-transfer/inventory-transfer.dtos';
import { CompanyDto } from 'src/companies/companies.dtos';
import { ReviewDto } from 'src/review/review.dtos';
import { DiscountCodeDto } from 'src/discount-code/discount-code.dto';
import { DiscountRuleDto } from 'src/discount-rule/discount-rule.dtos';
import { MetaDataConfig } from 'src/metadata-config/metadata-config.dtos';

type Entity =
  | 'INVENTORY_TRANSFER'
  | 'INVENTORY_BATCH'
  | 'COMPANY'
  | 'REVIEW'
  | 'DISCOUNT_CODE'
  | 'DISCOUNT_RULE'
  | 'META_DATA_CONFIG';

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
  REVIEW: {},
  DISCOUNT_CODE: {},
  DISCOUNT_RULE: {},
  META_DATA_CONFIG: {},
};

type EntityObject =
  | InventoryBatchDto
  | InventoryTransferDto
  | CompanyDto
  | ReviewDto
  | DiscountCodeDto
  | DiscountRuleDto
  | MetaDataConfig;

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

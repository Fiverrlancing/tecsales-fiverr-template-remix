export type MetaDataConfigType =
  | 'TEXT'
  | 'MULTI_LINE_TEXT'
  | 'DATE'
  | 'DATE_AND_TIME';
export type MetaDataConfigParentType =
  | 'INVENTORY_ITEM'
  | 'INVENTORY_VARIANT'
  | 'INVENTORY_UNIT';

export type MetaDataConfig = {
  id: string;
  name: string;
  collection: string;
  key: string;
  type: MetaDataConfigType;
  parentType: MetaDataConfigParentType;
  required: boolean;
  public: boolean;
  uiCollection: string;
  isMulti: boolean;
  createdAtISO: string;
  updatedAtISO?: string;
  deletedAtISO?: string;
};

export type MetaData = {
  id: string;
  configId: string;
  value: string;
  parentId: string;
};

export class CreateMetadataConfigInput {
  name: string;
  collection: string;
  key: string;
  type: MetaDataConfigType;
  parentType: MetaDataConfigParentType;
  required: boolean;
  public: boolean;
  uiCollection: string;
  isMulti: boolean;
}

export class CreateMetadataConfig {
  input: CreateMetadataConfigInput;
}

export class UpdateMetadataConfigInput {
  id: string;
  name: string;
  collection: string;
  key: string;
  type: MetaDataConfigType;
  parentType: MetaDataConfigParentType;
  required: boolean;
  public: boolean;
  uiCollection: string;
  isMulti: boolean;
}

export class UpdateMetadataConfig {
  input: UpdateMetadataConfigInput;
}

export class DeleteMetadataConfig {
  input: {
    id: string;
  };
}

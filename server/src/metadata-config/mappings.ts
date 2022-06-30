/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  MetaDataConfig as MetaDataConfigDto,
  CreateMetadataConfig as CreateMetaDataConfigDto,
  UpdateMetadataConfig as UpdateMetaDataConfigDto,
} from './metadata-config.dtos';
import {
  CreateMetaDataConfigInput,
  CreateMetaDataConfigPayload,
  MetaDataConfig,
  DeleteMetaDataConfigPayload,
  UpdateMetaDataConfigInput,
  UpdateMetaDataConfigPayload,
} from 'src/graphql';
import { getMockCreateDateTimes, getNextId } from 'src/db/mock-db';

export const toGQLMetaDataConfig = (
  metaDataConfig: MetaDataConfigDto,
): MetaDataConfig => {
  return {
    id: metaDataConfig.id,
    name: metaDataConfig.name,
    collection: metaDataConfig.collection,
    key: metaDataConfig.key,
    // @ts-ignore
    type: metaDataConfig.type,
    // @ts-ignore
    parentType: metaDataConfig.parentType,
    required: metaDataConfig.required,
    public: metaDataConfig.public,
    uiCollection: metaDataConfig.uiCollection,
    isMulti: metaDataConfig.isMulti,
    ...getMockCreateDateTimes(),
  };
};

// QUERY

export const fromGQLMetaDataConfig = (
  metaDataConfig: MetaDataConfig,
): MetaDataConfigDto => {
  return {
    id: metaDataConfig.id,
    name: metaDataConfig.name,
    collection: metaDataConfig.collection,
    key: metaDataConfig.key,
    // @ts-ignore
    type: metaDataConfig.type,
    // @ts-ignore
    parentType: metaDataConfig.parentType,
    required: metaDataConfig.required,
    public: metaDataConfig.public,
    uiCollection: metaDataConfig.uiCollection,
    isMulti: metaDataConfig.isMulti,
    ...getMockCreateDateTimes(),
  };
};

// MUTATIONS CREATE

export const fromGQLCreateMetaDataConfigInput = (
  metaDataConfig: CreateMetaDataConfigInput,
): CreateMetaDataConfigDto => {
  return {
    input: {
      name: metaDataConfig.name,
      collection: metaDataConfig.collection,
      key: metaDataConfig.key,
      // @ts-ignore
      type: metaDataConfig.type,
      // @ts-ignore
      parentType: metaDataConfig.parentType,
      required: metaDataConfig.required,
      public: metaDataConfig.public,
      uiCollection: metaDataConfig.uiCollection,
      isMulti: metaDataConfig.isMulti,
    },
  };
};

export const fromCreateMetaDataConfigDto = (
  metaDataConfig: CreateMetaDataConfigDto,
): MetaDataConfigDto => {
  return {
    id: getNextId(),
    name: metaDataConfig.input.name,
    collection: metaDataConfig.input.collection,
    key: metaDataConfig.input.key,
    // @ts-ignore
    type: metaDataConfig.input.type,
    // @ts-ignore
    parentType: metaDataConfig.input.parentType,
    required: metaDataConfig.input.required,
    public: metaDataConfig.input.public,
    uiCollection: metaDataConfig.input.uiCollection,
    isMulti: metaDataConfig.input.isMulti,
    ...getMockCreateDateTimes(),
    ...getMockCreateDateTimes(),
  };
};

export const toGQLCreateMetaDataConfigPayload = (
  metaDataConfig: MetaDataConfigDto,
): CreateMetaDataConfigPayload => {
  return {
    code: 201,
    message: 'Created Successfully',
    metaDataConfig: toGQLMetaDataConfig(metaDataConfig),
    success: true,
  };
};

// MUTATIONS UPDATE

export const fromGQLUpdateMetaDataConfigInput = (
  metaDataConfig: UpdateMetaDataConfigInput,
): UpdateMetaDataConfigDto => {
  return {
    input: {
      id: metaDataConfig.id,
      name: metaDataConfig.name,
      collection: metaDataConfig.collection,
      key: metaDataConfig.key,
      // @ts-ignore
      type: metaDataConfig.type,
      // @ts-ignore
      parentType: metaDataConfig.parentType,
      required: metaDataConfig.required,
      public: metaDataConfig.public,
      uiCollection: metaDataConfig.uiCollection,
      isMulti: metaDataConfig.isMulti,
    },
  };
};

export const fromUpdateMetaDataConfigDto = (
  metaDataConfig: UpdateMetaDataConfigDto,
): MetaDataConfigDto => {
  return {
    id: metaDataConfig.input.id,
    name: metaDataConfig.input.name,
    collection: metaDataConfig.input.collection,
    key: metaDataConfig.input.key,
    // @ts-ignore
    type: metaDataConfig.input.type,
    // @ts-ignore
    parentType: metaDataConfig.input.parentType,
    required: metaDataConfig.input.required,
    public: metaDataConfig.input.public,
    uiCollection: metaDataConfig.input.uiCollection,
    isMulti: metaDataConfig.input.isMulti,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLUpdateMetaDataConfigPayload = (
  metaDataConfig: MetaDataConfigDto,
): UpdateMetaDataConfigPayload => {
  return {
    code: 204,
    message: 'Updated Successfully',
    metaDataConfig: toGQLMetaDataConfig(metaDataConfig),
    success: true,
  };
};

// MUTATIONS DELETE

export const toGQLDeleteMetaDataConfigPayload = (
  dto: MetaDataConfig,
): DeleteMetaDataConfigPayload => {
  return {
    code: 204,
    message: 'Deleted Successfully',
    metaDataConfig: dto,
    success: true,
  };
};

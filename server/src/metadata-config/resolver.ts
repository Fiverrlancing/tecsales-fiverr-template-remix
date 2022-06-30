/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  MetaDataConfig as MetaDataConfigDto,
  CreateMetadataConfig as CreateMetaDataConfigDto,
  UpdateMetadataConfig as UpdateMetaDataConfigDto,
} from './metadata-config.dtos';
import {
  CreateMetaDataConfigInput,
  CreateMetaDataConfigPayload,
  DeleteMetaDataConfigInput,
  DeleteMetaDataConfigPayload,
  UpdateMetaDataConfigInput,
  UpdateMetaDataConfigPayload,
} from '../graphql';

import {
  fromGQLCreateMetaDataConfigInput,
  toGQLCreateMetaDataConfigPayload,
  fromCreateMetaDataConfigDto,
  fromGQLMetaDataConfig,
  toGQLDeleteMetaDataConfigPayload,
  fromGQLUpdateMetaDataConfigInput,
  fromUpdateMetaDataConfigDto,
  toGQLUpdateMetaDataConfigPayload,
} from './mappings';
import { deleteFromDb, findInDb, storeToDb, updateInDb } from 'src/db/mock-db';

@Resolver('MetaDataConfig')
export class MetaDataConfigResolver {
  @Query()
  async getMetaDataConfig(@Args('id') id: string) {
    const metaDataConfig = findInDb<MetaDataConfigDto>('META_DATA_CONFIG', id);

    // @ts-ignore
    return fromGQLMetaDataConfig(metaDataConfig);
  }

  @Mutation()
  async createMetaDataConfig(
    @Args('input')
    input: CreateMetaDataConfigInput,
  ): Promise<CreateMetaDataConfigPayload> {
    const inputDto: CreateMetaDataConfigDto =
      fromGQLCreateMetaDataConfigInput(input);

    const metaDataConfig = fromCreateMetaDataConfigDto(inputDto);

    storeToDb('META_DATA_CONFIG', metaDataConfig.id, metaDataConfig);

    return toGQLCreateMetaDataConfigPayload(metaDataConfig);
  }

  @Mutation()
  async updateMetaDataConfig(
    @Args('input')
    input: UpdateMetaDataConfigInput,
  ): Promise<UpdateMetaDataConfigPayload> {
    const dto: UpdateMetaDataConfigDto =
      fromGQLUpdateMetaDataConfigInput(input);

    const metaDataConfig = fromUpdateMetaDataConfigDto(dto);
    updateInDb('META_DATA_CONFIG', metaDataConfig.id, metaDataConfig);

    return toGQLUpdateMetaDataConfigPayload(metaDataConfig);
  }

  @Mutation()
  async deleteMetaDataConfig(
    @Args('input')
    input: DeleteMetaDataConfigInput,
  ): Promise<DeleteMetaDataConfigPayload> {
    const dto = deleteFromDb<MetaDataConfigDto>('META_DATA_CONFIG', input.id);

    // @ts-ignore
    return toGQLDeleteMetaDataConfigPayload(dto);
  }
}

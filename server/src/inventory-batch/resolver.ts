import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateInventoryBatchDto,
  DeleteInventoryBatchDto,
  InventoryBatchDto,
  UpdateInventoryBatchDto,
} from './inventory-batch.dtos';
import {
  CreateInventoryBatchInput,
  CreateInventoryBatchPayload,
  UpdateInventoryBatchPayload,
  UpdateInventoryBatchInput,
  DeleteInventoryBatchInput,
  DeleteInventoryBatchPayload,
} from '../graphql';

import {
  fromGQLCreateInventoryBatchInput,
  toGQLCreateInventoryBatchPayload,
  fromGQLUpdateInventoryBatchInput,
  toGQLUpdateInventoryBatchPayload,
  toGQLDeleteInventoryBatchPayload,
  fromGQLInventoryBatch,
  fromUpdateInventoryBatchDto,
  fromCreateInventoryBatchDto,
} from './mappings';
import { deleteFromDb, findInDb, storeToDb, updateInDb } from 'src/db/mock-db';

@Resolver('InventoryBatch')
export class InventoryBatchResolver {
  @Query()
  async getInventoryBatch(@Args('id') id: string) {
    const batch = findInDb<InventoryBatchDto>('INVENTORY_BATCH', id);

    return fromGQLInventoryBatch(batch);
  }

  @Mutation()
  async createInventoryBatch(
    @Args('input')
    input: CreateInventoryBatchInput,
  ): Promise<CreateInventoryBatchPayload> {
    const inputDto: CreateInventoryBatchDto =
      fromGQLCreateInventoryBatchInput(input);

    const batch = fromCreateInventoryBatchDto(inputDto);
    storeToDb('INVENTORY_BATCH', batch.id, batch);

    return toGQLCreateInventoryBatchPayload(batch);
  }

  @Mutation()
  async updateInventoryBatch(
    @Args('input')
    input: UpdateInventoryBatchInput,
  ): Promise<UpdateInventoryBatchPayload> {
    const dto: UpdateInventoryBatchDto =
      fromGQLUpdateInventoryBatchInput(input);

    const batch = fromUpdateInventoryBatchDto(dto);
    updateInDb('INVENTORY_BATCH', batch.id, batch);

    return toGQLUpdateInventoryBatchPayload(batch);
  }

  @Mutation()
  async deleteInventoryBatch(
    @Args('input')
    input: DeleteInventoryBatchInput,
  ): Promise<DeleteInventoryBatchPayload> {
    const dto = deleteFromDb<InventoryBatchDto>('INVENTORY_BATCH', input.id);

    return toGQLDeleteInventoryBatchPayload(dto);
  }
}

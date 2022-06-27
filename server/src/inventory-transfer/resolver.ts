import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateInventoryTransferDto,
  InventoryTransferDto,
  UpdateInventoryTransferDto,
} from './inventory-transfer.dtos';
import {
  InventoryTransfer,
  CreateInventoryTransferInput,
  CreateInventoryTransferPayload,
  UpdateInventoryTransferPayload,
  UpdateInventoryTransferInput,
  DeleteInventoryTransferInput,
} from '../graphql';
import {
  mockInventoryTransfer,
  toGQLInventoryTransfer,
  fromGQLCreateInventoryTransferInput,
  toGQLCreateInventoryTransferPayload,
  fromGQLUpdateInventoryTransferInput,
  toGQLUpdateInventoryTransferPayload,
  toGQLDeleteInventoryTransferPayload,
  fromCreateInventoryTransferDto,
  fromUpdateInventoryTransferDto,
} from './mappings';
import { deleteFromDb, findInDb, storeToDb, updateInDb } from 'src/db/mock-db';

@Resolver('InventoryTransfer')
export class InventoryTransferResolver {
  @Query()
  async getInventoryTransfer(@Args('id') id: string) {
    const dto = findInDb<InventoryTransferDto>('INVENTORY_TRANSFER', id);

    const transfer: InventoryTransfer = toGQLInventoryTransfer(dto);

    return transfer;
  }

  @Mutation()
  async createInventoryTransfer(
    @Args('input')
    input: CreateInventoryTransferInput,
  ): Promise<CreateInventoryTransferPayload> {
    const dto: CreateInventoryTransferDto =
      fromGQLCreateInventoryTransferInput(input);

    const transfer = fromCreateInventoryTransferDto(dto);
    storeToDb('INVENTORY_TRANSFER', transfer.id, transfer);

    return toGQLCreateInventoryTransferPayload(transfer);
  }

  @Mutation()
  async updateInventoryTransfer(
    @Args('input')
    input: UpdateInventoryTransferInput,
  ): Promise<UpdateInventoryTransferPayload> {
    const dto: UpdateInventoryTransferDto =
      fromGQLUpdateInventoryTransferInput(input);

    const transfer = fromUpdateInventoryTransferDto(dto);
    updateInDb('INVENTORY_TRANSFER', dto.id, transfer);

    return toGQLUpdateInventoryTransferPayload(transfer);
  }

  @Mutation()
  async deleteInventoryTransfer(
    @Args('input')
    input: DeleteInventoryTransferInput,
  ): Promise<UpdateInventoryTransferPayload> {
    const dto = deleteFromDb<InventoryTransferDto>(
      'INVENTORY_TRANSFER',
      input.id,
    );

    return toGQLDeleteInventoryTransferPayload(dto);
  }
}

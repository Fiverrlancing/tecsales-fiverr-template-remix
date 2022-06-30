/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  DiscountCodeDto,
  CreateDiscountCodeDto,
  UpdateDiscountCodeDto,
} from './discount-code.dto';
import {
  CreateDiscountCodeInput,
  CreateDiscountCodePayload,
  DeleteDiscountCodeInput,
  DeleteDiscountCodePayload,
  UpdateDiscountCodeInput,
  UpdateDiscountCodePayload,
} from '../graphql';

import {
  fromGQLCreateDiscountCodeInput,
  toGQLCreateDiscountCodePayload,
  fromCreateDiscountCodeDto,
  fromGQLDiscountCode,
  toGQLDeleteDiscountCodePayload,
  fromGQLUpdateDiscountCodeInput,
  fromUpdateDiscountCodeDto,
  toGQLUpdateDiscountCodePayload,
} from './mappings';
import { deleteFromDb, findInDb, storeToDb, updateInDb } from 'src/db/mock-db';

@Resolver('DiscountCode')
export class DiscountCodeResolver {
  @Query()
  async getDiscountCode(@Args('id') id: string) {
    const discountCode = findInDb<DiscountCodeDto>('DISCOUNT_CODE', id);

    // @ts-ignore
    return fromGQLDiscountCode(discountCode);
  }

  @Mutation()
  async createDiscountCode(
    @Args('input')
    input: CreateDiscountCodeInput,
  ): Promise<CreateDiscountCodePayload> {
    const inputDto: CreateDiscountCodeDto =
      fromGQLCreateDiscountCodeInput(input);

    const discountCode = fromCreateDiscountCodeDto(inputDto);

    storeToDb('DISCOUNT_CODE', discountCode.id, discountCode);

    return toGQLCreateDiscountCodePayload(discountCode);
  }

  @Mutation()
  async updateDiscountCode(
    @Args('input')
    input: UpdateDiscountCodeInput,
  ): Promise<UpdateDiscountCodePayload> {
    const dto: UpdateDiscountCodeDto = fromGQLUpdateDiscountCodeInput(input);

    const discountCode = fromUpdateDiscountCodeDto(dto);
    updateInDb('DISCOUNT_CODE', discountCode.id, discountCode);

    return toGQLUpdateDiscountCodePayload(discountCode);
  }

  @Mutation()
  async deleteDiscountCode(
    @Args('input')
    input: DeleteDiscountCodeInput,
  ): Promise<DeleteDiscountCodePayload> {
    const dto = deleteFromDb<DiscountCodeDto>('DISCOUNT_CODE', input.id);

    // @ts-ignore
    return toGQLDeleteDiscountCodePayload(dto);
  }
}

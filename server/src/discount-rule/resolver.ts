/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  DiscountRuleDto,
  CreateDiscountRuleDto,
  UpdateDiscountRuleDto,
} from './discount-rule.dtos';
import {
  CreateDiscountRuleInput,
  CreateDiscountRulePayload,
  DeleteDiscountRuleInput,
  DeleteDiscountRulePayload,
  UpdateDiscountRuleInput,
  UpdateDiscountRulePayload,
} from '../graphql';

import {
  fromGQLCreateDiscountRuleInput,
  toGQLCreateDiscountRulePayload,
  fromCreateDiscountRuleDto,
  fromGQLDiscountRule,
  toGQLDeleteDiscountRulePayload,
  fromGQLUpdateDiscountRuleInput,
  fromUpdateDiscountRuleDto,
  toGQLUpdateDiscountRulePayload,
} from './mappings';
import { deleteFromDb, findInDb, storeToDb, updateInDb } from 'src/db/mock-db';

@Resolver('DiscountRule')
export class DiscountRuleResolver {
  @Query()
  async getDiscountRule(@Args('id') id: string) {
    const discountRule = findInDb<DiscountRuleDto>('DISCOUNT_RULE', id);

    // @ts-ignore
    return fromGQLDiscountRule(discountRule);
  }

  @Mutation()
  async createDiscountRule(
    @Args('input')
    input: CreateDiscountRuleInput,
  ): Promise<CreateDiscountRulePayload> {
    const inputDto: CreateDiscountRuleDto =
      fromGQLCreateDiscountRuleInput(input);

    const discountRule = fromCreateDiscountRuleDto(inputDto);

    storeToDb('DISCOUNT_RULE', discountRule.id, discountRule);

    return toGQLCreateDiscountRulePayload(discountRule);
  }

  @Mutation()
  async updateDiscountRule(
    @Args('input')
    input: UpdateDiscountRuleInput,
  ): Promise<UpdateDiscountRulePayload> {
    const dto: UpdateDiscountRuleDto = fromGQLUpdateDiscountRuleInput(input);

    const discountRule = fromUpdateDiscountRuleDto(dto);
    updateInDb('DISCOUNT_RULE', discountRule.id, discountRule);

    return toGQLUpdateDiscountRulePayload(discountRule);
  }

  @Mutation()
  async deleteDiscountRule(
    @Args('input')
    input: DeleteDiscountRuleInput,
  ): Promise<DeleteDiscountRulePayload> {
    const dto = deleteFromDb<DiscountRuleDto>('DISCOUNT_RULE', input.id);

    // @ts-ignore
    return toGQLDeleteDiscountRulePayload(dto);
  }
}

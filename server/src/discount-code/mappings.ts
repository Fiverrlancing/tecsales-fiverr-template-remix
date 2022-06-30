/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  DiscountCodeDto,
  CreateDiscountCodeDto,
  UpdateDiscountCodeDto,
} from './discount-code.dto';
import {
  CreateDiscountCodeInput,
  CreateDiscountCodePayload,
  DiscountCode,
  DeleteDiscountCodePayload,
  UpdateDiscountCodeInput,
  UpdateDiscountCodePayload,
} from 'src/graphql';
import { getMockCreateDateTimes, getNextId } from 'src/db/mock-db';

export const toGQLDiscountCode = (
  discountCode: DiscountCodeDto,
): DiscountCode => {
  return {
    id: discountCode.id,
    // @ts-ignore
    rule: discountCode.rule,
    code: discountCode.code,
    updatedAtISO: discountCode.updatedAtISO,
    createdAtISO: discountCode.createdAtISO,
    deletedAtISO: discountCode.deletedAtISO,
  };
};

// QUERY

export const fromGQLDiscountCode = (
  discountCode: DiscountCode,
): DiscountCodeDto => {
  return {
    id: discountCode.id,
    // @ts-ignore
    rule: discountCode.rule,
    code: discountCode.code,
    updatedAtISO: discountCode.updatedAtISO,
    createdAtISO: discountCode.createdAtISO,
    deletedAtISO: discountCode.deletedAtISO,
  };
};

// MUTATIONS CREATE

export const fromGQLCreateDiscountCodeInput = (
  discountCode: CreateDiscountCodeInput,
): CreateDiscountCodeDto => {
  return {
    // @ts-ignore
    rule: discountCode.rule,
    code: discountCode.code,
  };
};

export const fromCreateDiscountCodeDto = (
  discountCode: CreateDiscountCodeDto,
): DiscountCodeDto => {
  return {
    id: getNextId(),
    // @ts-ignore
    rule: discountCode.rule,
    code: discountCode.code,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLCreateDiscountCodePayload = (
  DiscountCode: DiscountCodeDto,
): CreateDiscountCodePayload => {
  return {
    code: 201,
    message: 'Created Successfully',
    // @ts-ignore
    discountCode: toGQLDiscountCode(DiscountCode),
    success: true,
  };
};

// MUTATIONS UPDATE

export const fromGQLUpdateDiscountCodeInput = (
  discountCode: UpdateDiscountCodeInput,
): UpdateDiscountCodeDto => {
  return {
    id: discountCode.id,
    // @ts-ignore
    rule: discountCode.rule,
    code: discountCode.code,
  };
};

export const fromUpdateDiscountCodeDto = (
  discountCode: UpdateDiscountCodeDto,
): DiscountCodeDto => {
  return {
    id: discountCode.id,
    // @ts-ignore
    rule: discountCode.rule,
    code: discountCode.code,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLUpdateDiscountCodePayload = (
  discountCode: DiscountCodeDto,
): UpdateDiscountCodePayload => {
  return {
    code: 204,
    message: 'Updated Successfully',
    discountCode: toGQLDiscountCode(discountCode),
    success: true,
  };
};

// MUTATIONS DELETE

export const toGQLDeleteDiscountCodePayload = (
  dto: DiscountCode,
): DeleteDiscountCodePayload => {
  return {
    code: 204,
    message: 'Deleted Successfully',
    discountCode: dto,
    success: true,
  };
};

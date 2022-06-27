import {
  CreateDiscountRuleDto,
  DiscountRuleDto,
  UpdateDiscountRuleDto,
} from '../discount-rule/discount-rule.dtos';

export class DiscountCodeDto {
  id: string;
  rule: DiscountRuleDto;
  code: string;

  createdAtISO: string;
  updatedAtISO: string;
  deletedAtISO: string;
}

export class CreateDiscountCodeDto {
  rule: CreateDiscountRuleDto;
  code: string;
}

export class UpdateDiscountCodeDto {
  id: string;
  rule: UpdateDiscountRuleDto;
  code: string;
}

export class DeleteDiscountCodeDto {
  id: string;
}

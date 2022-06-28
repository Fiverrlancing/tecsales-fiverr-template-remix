import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CompanyDto,
  CreateCompanyDto,
  UpdateCompanyDto,
} from './companies.dtos';
import {
  CreateCompanyInput,
  CreateCompanyPayload,
  DeleteCompanyInput,
  DeleteCompanyPayload,
  UpdateCompanyInput,
  UpdateCompanyPayload,
} from '../graphql';

import {
  fromGQLCreateCompanyInput,
  toGQLCreateCompanyPayload,
  fromCreateCompanyDto,
  fromGQLCompany,
  toGQLDeleteCompanyPayload,
  fromGQLUpdateCompanyInput,
  fromUpdateCompanyDto,
  toGQLUpdateCompanyPayload,
} from './mappings';
import { deleteFromDb, findInDb, storeToDb, updateInDb } from 'src/db/mock-db';

@Resolver('Company')
export class CompanyResolver {
  @Query()
  async getCompany(@Args('id') id: string) {
    const company = findInDb<CompanyDto>('COMPANY', id);

    return fromGQLCompany(company);
  }

  @Mutation()
  async createCompany(
    @Args('input')
    input: CreateCompanyInput,
  ): Promise<CreateCompanyPayload> {
    const inputDto: CreateCompanyDto = fromGQLCreateCompanyInput(input);

    const company = fromCreateCompanyDto(inputDto);

    storeToDb('COMPANY', company.id, company);

    return toGQLCreateCompanyPayload(company);
  }

  @Mutation()
  async updateCompany(
    @Args('input')
    input: UpdateCompanyInput,
  ): Promise<UpdateCompanyPayload> {
    const dto: UpdateCompanyDto = fromGQLUpdateCompanyInput(input);

    const company = fromUpdateCompanyDto(dto);
    updateInDb('COMPANY', company.id, company);

    return toGQLUpdateCompanyPayload(company);
  }

  @Mutation()
  async deleteCompany(
    @Args('input')
    input: DeleteCompanyInput,
  ): Promise<DeleteCompanyPayload> {
    const dto = deleteFromDb<CompanyDto>('COMPANY', input.id);

    return toGQLDeleteCompanyPayload(dto);
  }
}

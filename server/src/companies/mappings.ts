import {
  CompanyDto,
  CreateCompanyDto,
  UpdateCompanyDto,
} from './companies.dtos';
import {
  CreateCompanyInput,
  CreateCompanyPayload,
  Company,
  DeleteCompanyPayload,
  UpdateCompanyInput,
  UpdateCompanyPayload,
} from 'src/graphql';
import { getMockCreateDateTimes, getNextId } from 'src/db/mock-db';

export const toGQLCompany = (company: CompanyDto): Company => {
  return {
    id: company.id,
    name: company.name,
    number: company.number,
    address: company.address,
    updatedAtISO: company.updatedAtISO,
    createdAtISO: company.createdAtISO,
    deletedAtISO: company.deletedAtISO,
  };
};

// QUERY

export const fromGQLCompany = (company: Company): CompanyDto => {
  return {
    id: company.id,
    name: company.name,
    number: company.number,
    address: company.address,
    updatedAtISO: company.updatedAtISO,
    createdAtISO: company.createdAtISO,
    deletedAtISO: company.deletedAtISO,
  };
};

// MUTATIONS CREATE

export const fromGQLCreateCompanyInput = (
  company: CreateCompanyInput,
): CreateCompanyDto => {
  return {
    input: {
      name: company.name,
      number: company.number,
      address: company.address,
    },
  };
};

export const fromCreateCompanyDto = (company: CreateCompanyDto): CompanyDto => {
  return {
    id: getNextId(),
    name: company.input.name,
    number: company.input.number,
    address: company.input.address,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLCreateCompanyPayload = (
  Company: CompanyDto,
): CreateCompanyPayload => {
  return {
    code: 201,
    message: 'Created Successfully',
    company: toGQLCompany(Company),
    success: true,
  };
};

// MUTATIONS UPDATE

export const fromGQLUpdateCompanyInput = (
  company: UpdateCompanyInput,
): UpdateCompanyDto => {
  return {
    input: {
      id: company.id,
      name: company.name,
      number: company.number,
      address: company.address,
    },
  };
};

export const fromUpdateCompanyDto = (company: UpdateCompanyDto): CompanyDto => {
  return {
    id: company.input.id,
    name: company.input.name,
    number: company.input.number,
    address: company.input.address,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLUpdateCompanyPayload = (
  company: CompanyDto,
): UpdateCompanyPayload => {
  return {
    code: 204,
    message: 'Updated Successfully',
    company: toGQLCompany(company),
    success: true,
  };
};

// MUTATIONS DELETE

export const toGQLDeleteCompanyPayload = (
  dto: Company,
): DeleteCompanyPayload => {
  return {
    code: 204,
    message: 'Deleted Successfully',
    company: dto,
    success: true,
  };
};

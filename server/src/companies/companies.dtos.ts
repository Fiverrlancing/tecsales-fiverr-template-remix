// TODO: missing src/customer/customer.dtos
// import { AddressDto } from 'src/customer/customer.dtos';

export type AddressDto = {
  line1: string;
  line2?: string;
  line3?: string;
  townCity: string;
  country: string;
  postZipCode: string;
  provinceCode: string;
  isDefault: boolean;
};

export type CompanyDto = {
  id: string;
  name: string;
  number: number;
  address: AddressDto;

  createdAtISO: string;
  updatedAtISO: string;
  deletedAtISO: string;
};

export type CreateCompanyDto = {
  input: {
    name: string;
    number: number;
    address: AddressDto;
  };
};

export type UpdateCompanyDto = {
  input: {
    id: string;
    name: string;
    number: number;
    address: AddressDto;
  };
};

export type DeleteCompanyDto = {
  input: {
    id: string;
  };
};

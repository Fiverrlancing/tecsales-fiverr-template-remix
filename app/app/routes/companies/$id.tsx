import { Button, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import type { CompanyType } from "./form";
import Form from "./form";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "@remix-run/react";
import { getCompany } from "../../queries/getCompany";
import { getDeleteCompany } from "../../mutations/companies/deleteCompany";
import { getUpdateCompanyMutation } from "../../mutations/companies/updateCompany";

const initialValues: CompanyType = {
  id: "",
  name: "",
  number: 0,
  address: {
    line1: "",
    line2: "",
    line3: "",
    townCity: "",
    country: "",
    postZipCode: "",
    provinceCode: "",
    isDefault: false,
  }
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const { loading, data, error } = useQuery(getCompany(), {
    variables: { id },
  });

  const [deleteCompany] = useMutation(getDeleteCompany());
  const [updateCompany] = useMutation(getUpdateCompanyMutation());  
  const navigate = useNavigate();

  const onDelete = () => {
    setErrorMessage("")
    deleteCompany({
      variables: {
        id,
      },
    })
    .then(({data}) => {
      setMessage(data.deleteCompany.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  };

  const onUpdate = () => {
    setMessage("")
    const company = {...values, id, address: omitSingle('__typename', values.address)}
    updateCompany({
      variables: {
        ...company,
      },
    })
    .then(({data}) => {
      setMessage(data.updateCompany.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  };
  
  const omitSingle = (key: string, { [key]: _, ...obj }: any): any => obj

  useEffect(() => {
    if (data) {
      setValues({
        ...data.getCompany,        
      });
    }
  }, [data]);

  if (error?.graphQLErrors) {
    navigate("/error");
  }
  if (error?.networkError) {
    navigate("/error");
  }

  return (
    <>
      <Center>
        {loading ? (
          <Spinner size={"lg"} />
        ) : (
            <Form {...{ values, setValues }} error={error?.message || errorMessage} message={message} />
        )}
      </Center>
      <Center margin="1rem 0">
        <Button
          marginRight="1rem"
          disabled={loading}          
          colorScheme={"blue"}
          onClick={onUpdate}
        >
          Save
        </Button>
        <Button
          disabled={loading}
          color={"red"}
          onClick={onDelete}
        >
          Delete
        </Button>
      </Center>
    </>
  );
}

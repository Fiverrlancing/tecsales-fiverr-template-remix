import { Button, Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import type { CompanyType } from "./form";
import Form from "./form";
import { getCreateCompanyMutation } from "../../mutations/companies/createCompany";
import { useMutation } from "@apollo/client";
import { useNavigate } from "@remix-run/react";

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
  const navigate = useNavigate();

  const [createInventoryBatch, { error }] = useMutation(
    getCreateCompanyMutation()
  );

  const [loading, setLoading] = useState(false);

  const create = () => {
    setLoading(true);
    createInventoryBatch({
      variables: {
        ...values,        
      },
    })
      .then(() => {
        setLoading(false);
        navigate("/companies/1");
      })
      .catch(() => {
        navigate("/error");
        setLoading(false);
      });
  };

  return (
    <>
      <Center>
        {loading ? (
          <Spinner size={"lg"} />
        ) : (
          <Form {...{ values, setValues }} error={error?.message} />
        )}
      </Center>
      <Center margin="1rem 0">
        <Button
          disabled={loading}
          margin="auto"
          colorScheme={"blue"}
          onClick={create}
        >
          Create
        </Button>
      </Center>
    </>
  );
}

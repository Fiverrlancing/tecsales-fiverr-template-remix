import { Button, Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import type { InventoryBatchType } from "./form";
import Form from "./form";
import { getCreateInventoryBatchMutation } from "../../mutations/createInventoryBatch";
import { useMutation } from "@apollo/client";
import { useNavigate } from "@remix-run/react";

const initialValues: InventoryBatchType = {
  reference: "",
  name: "",
  description: "",
  quantity: 0,
  inventoryVariantId: "",
  expirationISO: new Date(),
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const [createInventoryBatch, { error }] = useMutation(
    getCreateInventoryBatchMutation()
  );

  const [loading, setLoading] = useState(false);

  const create = () => {
    setLoading(true);
    createInventoryBatch({
      variables: {
        ...values,
        expirationISO: values.expirationISO.toISOString(),
      },
    })
      .then(() => {
        setLoading(false);
        navigate("/inventorybatch/1");
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

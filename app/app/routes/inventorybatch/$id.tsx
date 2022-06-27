import { Button, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { InventoryBatchType } from "./form";
import Form from "./form";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "@remix-run/react";
import { getInventoryBatchQuery } from "../../queries/getInventoryBatch";
import { getDeleteInventoryBatchMutation } from "../../mutations/deleteInventoryBatch";

const initialValues: InventoryBatchType = {
  reference: "",
  name: "",
  description: "",
  quantity: 0,
  inventoryVariantId: "1",
  expirationISO: new Date(),
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const { id } = useParams();

  const { loading, data, error } = useQuery(getInventoryBatchQuery(), {
    variables: { id },
  });

  const [deleteInventoryBatch] = useMutation(getDeleteInventoryBatchMutation());
  const navigate = useNavigate();

  const deleteBatch = () => {
    deleteInventoryBatch({
      variables: {
        id,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setValues({
        ...data.getInventoryBatch,
        expirationISO: new Date(data.getInventoryBatch.expirationISO),
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
          <Form {...{ values, setValues }} error={error?.message} />
        )}
      </Center>
      <Center margin="1rem 0">
        <Button
          margin="auto"
          disabled={loading}
          color={"red"}
          onClick={deleteBatch}
        >
          Delete
        </Button>
      </Center>
    </>
  );
}

import { Button, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { InventoryTransferType } from "./form";
import Form from "./form";
import { useMutation, useQuery } from "@apollo/client";
import { getInventoryTransferQuery } from "../../queries/getInventoryTransfer";
import { getDeleteInventoryTransferMutation } from "../../mutations/deleteInventoryTransfer";
import { useNavigate, useParams } from "@remix-run/react";

const initialValues: InventoryTransferType = {
  vendorReference: "",
  customerReference: "",
  originId: "",
  destinationId: "",
  expectedDeliveryDateISO: new Date(),
  trackingCarrierId: "",
  trackingCode: "",
  trackingUrl: "",
  items: [],
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const { id } = useParams();
  const { loading, data, error } = useQuery(getInventoryTransferQuery(), {
    variables: { id },
  });
  const [deleteInventoryTransfer] = useMutation(
    getDeleteInventoryTransferMutation()
  );
  const navigate = useNavigate();

  const deleteTransfer = () => {
    deleteInventoryTransfer({
      variables: {
        id,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setValues({
        ...data.getInventoryTransfer,
        expectedDeliveryDateISO: new Date(
          data.getInventoryTransfer.expectedDeliveryDateISO
        ),
        items: [...data.getInventoryTransfer.items],
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
          onClick={deleteTransfer}
        >
          Delete
        </Button>
      </Center>
    </>
  );
}

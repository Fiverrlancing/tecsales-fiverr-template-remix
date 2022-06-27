import { Button, Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import type { InventoryTransferType } from "./form";
import Form from "./form";
import { getCreateInventoryTransferMutation } from "../../mutations/createInventoryTransfer";
import { useMutation } from "@apollo/client";
import { useNavigate } from "@remix-run/react";

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
  const navigate = useNavigate();

  const [createInventoryTransfer, { error }] = useMutation(
    getCreateInventoryTransferMutation()
  );

  const [loading, setLoading] = useState(false);

  const create = () => {
    setLoading(true);
    createInventoryTransfer({
      variables: {
        ...values,
        expectedDeliveryDateISO: values.expectedDeliveryDateISO.toISOString(),
      },
    })
      .then(() => {
        setLoading(false);
        navigate("/inventorytransfer/1");
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

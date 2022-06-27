import {
  FormControl,
  Input,
  FormLabel,
  IconButton,
  Button,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Select,
  ButtonGroup,
  Heading,
  VStack,
  Alert,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";

enum Metric {
  UNIT = "UNIT",
  GRAM = "GRAM",
  KILOGRAM = "KILOGRAM",
}

const initialInventoryTransferItem: InventoryTransferItemDto = {
  inventoryUnitId: "",
  inventoryVariantId: "1",
  quantity: {
    amount: 0,
    metric: Metric.UNIT,
  },
};

type Quantity = {
  amount: number;
  metric: Metric;
};

interface InventoryTransferItemDto {
  inventoryVariantId: string;
  inventoryUnitId: string;
  quantity: Quantity;
}

export interface InventoryTransferType {
  vendorReference: string;
  customerReference: string;
  originId: string;
  destinationId: string;
  expectedDeliveryDateISO: Date;
  trackingCarrierId: string;
  trackingCode: string;
  trackingUrl: string;
  items: InventoryTransferItemDto[];
}

let Key = 1;

export default function ({
  values,
  setValues,
  error,
}: {
  values: InventoryTransferType;
  setValues: React.Dispatch<React.SetStateAction<InventoryTransferType>>;
  error?: string;
}) {
  const handleInputChange = (e: React.ChangeEvent<Element>) => {
    const { name, value } = e.target as unknown as {
      name: string;
      value: string;
    };

    setValues({
      ...values,
      [name]: value,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedInventoryTransferItem, setInventoryTransferItem] = useState(
    initialInventoryTransferItem
  );

  return (
    <VStack w={["50%", "50%", "30%"]} spacing={3}>
      <Heading w={"fit-content"} margin={"auto"}>
        Inventory Transfer
      </Heading>

      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <FormControl>
        <FormLabel>Vendor Reference</FormLabel>
        <Input
          value={values.vendorReference}
          name="vendorReference"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Customer Reference</FormLabel>
        <Input
          name="customerReference"
          value={values.customerReference}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Origin Id</FormLabel>
        <Input
          name="originId"
          value={values.originId}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Destination Id</FormLabel>
        <Input
          name="destinationId"
          value={values.destinationId}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Expected Delivery Date</FormLabel>
        <SingleDatepicker
          onDateChange={(date) =>
            setValues({ ...values, expectedDeliveryDateISO: date })
          }
          date={values.expectedDeliveryDateISO}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tracking Carrier Id</FormLabel>
        <Input
          name="trackingCarrierId"
          value={values.trackingCarrierId}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tracking Code</FormLabel>
        <Input
          name="trackingCode"
          value={values.trackingCode}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tracking Url</FormLabel>
        <Input
          name="trackingUrl"
          value={values.trackingUrl}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Inventory Transfer Item</FormLabel>
        <List spacing={3}>
          {values.items?.map((value, index) => {
            return (
              <ListItem key={index}>
                <ButtonGroup w="100%">
                  <Button
                    onClick={() => {
                      setInventoryTransferItem(values.items[index]);
                      onOpen();
                    }}
                    w={"70%"}
                  >
                    Variant {value.inventoryVariantId}
                  </Button>
                  <Button
                    w={"30%"}
                    color={"red"}
                    onClick={() => {
                      values.items.splice(index, 1);
                      setValues({ ...values });
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </ListItem>
            );
          })}
          <ListItem>
            <IconButton
              w={"100%"}
              icon={<AddIcon />}
              onClick={() => {
                setInventoryTransferItem(initialInventoryTransferItem);
                onOpen();
              }}
              aria-label={""}
            />
          </ListItem>
        </List>
      </FormControl>
      {isOpen && (
        <CreateInventoryTransferItem
          key={Key}
          {...{
            isOpen,
            onClose,
            setValues,
            selectedInventoryTransferItem,
          }}
          isUpdate={Boolean(
            selectedInventoryTransferItem.inventoryUnitId !== ""
          )}
        />
      )}
    </VStack>
  );
}

interface CreateInventoryTransferItemProps {
  onClose: () => void;
  isOpen: boolean;
  setValues: React.Dispatch<React.SetStateAction<InventoryTransferType>>;
  selectedInventoryTransferItem: InventoryTransferItemDto;
  isUpdate: boolean;
}

const metricOptions = [
  { id: 1, label: "Unit", metricValue: Metric.UNIT },
  { id: 2, label: "Gram", metricValue: Metric.GRAM },
  { id: 2, label: "Kg", metricValue: Metric.KILOGRAM },
];

function CreateInventoryTransferItem({
  isOpen,
  onClose,
  setValues,
  selectedInventoryTransferItem,
  isUpdate,
}: CreateInventoryTransferItemProps) {
  const initialRef = React.useRef(null);
  const [inventoryTransferItem, setInventoryTransferItem] = useState(
    selectedInventoryTransferItem
  );

  const handleInputChange = (e: React.ChangeEvent<Element>) => {
    const { name, value } = e.target as unknown as {
      name: string;
      value: string;
    };
    setInventoryTransferItem({
      ...inventoryTransferItem,
      [name]: value,
    });
  };

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Inventory Transfer Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Inventory Variant Id</FormLabel>
            <Select
              value={inventoryTransferItem.inventoryVariantId}
              onChange={(e) => {
                inventoryTransferItem.inventoryVariantId = e.target.value;
                setInventoryTransferItem({ ...inventoryTransferItem });
              }}
            >
              <option value="1">Variant 1</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Inventory Unit Id</FormLabel>
            <Input
              name="inventoryUnitId"
              value={inventoryTransferItem.inventoryUnitId}
              placeholder="Inventory Unit Id"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <Input
              value={inventoryTransferItem.quantity.amount}
              placeholder="Amount"
              type="number"
              marginBottom={3}
              name="amount"
              onChange={(e) => {
                inventoryTransferItem.quantity.amount = parseInt(
                  e.target.value
                );
                setInventoryTransferItem({
                  ...inventoryTransferItem,
                });
              }}
            />
            <Select
              onChange={(e) => {
                inventoryTransferItem.quantity.metric =
                  metricOptions[e.target.selectedIndex].metricValue;
                setInventoryTransferItem({ ...inventoryTransferItem });
              }}
            >
              {metricOptions.map((value, index) => (
                <option key={index} value={value.label}>
                  {value.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              setValues((values) => {
                values.items = [...values.items, inventoryTransferItem];
                return { ...values };
              });
              Key++;
            }}
          >
            {isUpdate ? "Update" : "Add"}
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

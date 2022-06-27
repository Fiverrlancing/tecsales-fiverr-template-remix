import {
  FormControl,
  Input,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Heading,
  VStack,
  Alert,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export interface InventoryBatchType {
  reference: string;
  name: string;
  description: string;
  quantity: number;
  inventoryVariantId: string;
  expirationISO: Date;
}

const inventoryVariantIds = [{ name: "Variant 1", id: "1" }];

export default function ({
  values,
  setValues,
  error,
}: {
  values: InventoryBatchType;
  setValues: React.Dispatch<React.SetStateAction<InventoryBatchType>>;
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

  return (
    <VStack w={["50%", "50%", "30%"]} spacing={3}>
      <Heading w={"fit-content"} margin={"2rem auto"}>
        Inventory Batch
      </Heading>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <FormControl>
        <FormLabel>Reference</FormLabel>
        <Input
          value={values.reference}
          name="reference"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input name="name" value={values.name} onChange={handleInputChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          name="description"
          value={values.description}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Quantity</FormLabel>
        <NumberInput
          name="quantity"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, quantity: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.quantity}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Inventory Variant Id</FormLabel>
        <Select
          value={values.inventoryVariantId}
          name="inventoryVariantId"
          onChange={(e) =>
            setValues({
              ...values,
              inventoryVariantId:
                inventoryVariantIds[e.target.selectedIndex].id,
            })
          }
        >
          {inventoryVariantIds.map((value, index) => (
            <option key={index}>{value.name}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>expirationISO</FormLabel>
        <SingleDatepicker
          onDateChange={(date) => setValues({ ...values, expirationISO: date })}
          date={values.expirationISO}
        />
      </FormControl>
    </VStack>
  );
}

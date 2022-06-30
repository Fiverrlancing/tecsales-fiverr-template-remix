import {
  FormControl,
  Input,
  FormLabel,  
  Heading,
  Stack,
  Alert,
  AlertDescription,
  AlertIcon,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Checkbox,
} from "@chakra-ui/react";

import { DiscountRuleType } from "../discountrule/form";

export interface DiscountCodeType {
  id: string;
  rule: DiscountRuleType;
  code: string;

  createdAtISO: string;
  updatedAtISO: string;
  deletedAtISO: string;
}

export default function ({
  values,
  setValues,
  error,
  message,
}: {
  values: DiscountCodeType;
  setValues: React.Dispatch<React.SetStateAction<DiscountCodeType>>;
  error?: string;
  message?: string;
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
    <Stack w={["50%", "50%", "30%"]} spacing={3}>
      <Heading w={"fit-content"} margin={"2rem auto"}>
        Discount code
      </Heading>
       {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {message && (
        <Alert status="success">
          <AlertIcon />
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </Stack>
  );
}

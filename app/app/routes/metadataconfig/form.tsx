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

export enum MetaDataConfigTypeType {
    TEXT = "TEXT",
    MULTI_LINE_TEXT = "MULTI_LINE_TEXT",
    DATE = "DATE",
    DATE_AND_TIME = "DATE_AND_TIME"
}

export enum MetaDataConfigParentType {
    INVENTORY_ITEM = "INVENTORY_ITEM",
    INVENTORY_VARIANT = "INVENTORY_VARIANT",
    INVENTORY_UNIT = "INVENTORY_UNIT"
}

export interface MetaDataConfigType {
  id: string;
  name: string;
  collection?: string;
  key: string;
  type: MetaDataConfigTypeType;
  parentType: MetaDataConfigParentType;
  required: boolean;
  public: boolean;
  uiCollection?: string;
  isMulti: boolean;
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
  values: MetaDataConfigType;
  setValues: React.Dispatch<React.SetStateAction<MetaDataConfigType>>;
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
        Meta data config
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

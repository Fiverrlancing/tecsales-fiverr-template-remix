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

export interface CompanyType {
  id: string;
  name: string;
  number: number;
  address: {
    line1: string;
    line2?: string;
    line3?: string;
    townCity: string;
    country: string;
    postZipCode: string;
    provinceCode: string;
    isDefault: boolean;
  }
}

export default function ({
  values,
  setValues,
  error,
  message,
}: {
  values: CompanyType;
  setValues: React.Dispatch<React.SetStateAction<CompanyType>>;
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
        Company
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

      {/* ID */}      
        <Input
          value={values.id}
          name="id"
          type="hidden"
        />
      
      {/* NAME */}
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          value={values.name}
          name="name"
          onChange={handleInputChange}
        />
      </FormControl>
      
      {/* NUMBER */}
      <FormControl>
        <FormLabel>Number</FormLabel>
        <NumberInput
          name="number"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, number: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.number}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>     
      
      {/* ADDRESS: LINE 1 */}
      <FormControl>
        <FormLabel>Line 1</FormLabel>
        <Input
          name="line1"
          value={values.address?.line1}
          onChange={(e) =>
            setValues({ ...values, address: {...values.address, line1: e.target.value} })
          }
        />
      </FormControl>
      
      {/* ADDRESS: LINE 2 */}
      <FormControl>
        <FormLabel>Line 2</FormLabel>
        <Input
          name="line1"
          value={values.address?.line2}
          onChange={(e) =>
            setValues({ ...values, address: {...values.address, line2: e.target.value} })
          }
        />
      </FormControl>
      
      {/* ADDRESS: LINE 3 */}
      <FormControl>
        <FormLabel>Line 3</FormLabel>
        <Input
          name="line1"
          value={values.address?.line3}
          onChange={(e) =>
            setValues({ ...values, address: {...values.address, line3: e.target.value} })
          }
        />
      </FormControl>
      
      {/* ADDRESS: TOWN CITY */}
      <FormControl>
        <FormLabel>Town city</FormLabel>
        <Input
          name="townCity"
          value={values.address?.townCity}
          onChange={(e) =>
            setValues({ ...values, address: {...values.address, townCity: e.target.value} })
          }
        />
      </FormControl>
      
      {/* ADDRESS: COUNTRY */}
      <FormControl>
        <FormLabel>Country</FormLabel>
        <Input
          name="country"
          value={values.address?.country}
          onChange={(e) =>
            setValues({ ...values, address: {...values.address, country: e.target.value} })
          }
        />
      </FormControl>
      
      {/* ADDRESS: postZipCode */}
      <FormControl>
        <FormLabel>Zip code</FormLabel>
        <Input
          name="postZipCode"
          value={values.address?.postZipCode}
          onChange={(e) =>
            setValues({ ...values, address: {...values.address, postZipCode: e.target.value} })
          }
        />
      </FormControl>
      
      {/* ADDRESS: provinceCode */}
      <FormControl>
        <FormLabel>Province code</FormLabel>
        <Input
          name="provinceCode"
          value={values.address?.provinceCode}
          onChange={(e) =>
            setValues({ ...values, address: {...values.address, provinceCode: e.target.value} })
          }
        />
      </FormControl>
      
      {/* ADDRESS: isDefault */}
      <Checkbox
        name="isDefault"
        checked={values.address?.isDefault}
        onChange={(e) =>
          setValues({...values, address: {...values.address, isDefault: e.target.checked}})
        }
      >
        Default
      </Checkbox>

    </Stack>
  );
}

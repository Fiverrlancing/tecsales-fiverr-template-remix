import {
  FormControl,
  Input,
  FormLabel,  
  Heading,
  Stack,
  Alert,
  AlertDescription,
  AlertIcon,
  Checkbox,
  Select,
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

const TYPES = [
  {value: MetaDataConfigTypeType.TEXT, label: 'text'},
  {value: MetaDataConfigTypeType.MULTI_LINE_TEXT, label: 'multiline text'},
  {value: MetaDataConfigTypeType.DATE, label: 'date'},
  {value: MetaDataConfigTypeType.DATE_AND_TIME, label: 'date and time'},
]
const PARENT_TYPES = [
  {value: MetaDataConfigParentType.INVENTORY_ITEM, label: 'inventory item'},
  {value: MetaDataConfigParentType.INVENTORY_VARIANT, label: 'inventory variant'},
  {value: MetaDataConfigParentType.INVENTORY_UNIT, label: 'inventory unit'},
]

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
      
       {/* ID */}      
        <Input
          value={values.id}
          name="id"
          type="hidden"
        />
      
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          value={values.name}
          name="name"
          onChange={handleInputChange}
        />
      </FormControl>
      
      <FormControl>
        <FormLabel>Collection</FormLabel>
        <Input
          value={values.collection}
          name="collection"
          onChange={handleInputChange}
        />
      </FormControl>
      
      <FormControl>
        <FormLabel>Key</FormLabel>
        <Input
          value={values.key}
          name="key"
          onChange={handleInputChange}
        />
      </FormControl>           
      
      <FormControl>
        <FormLabel>Type</FormLabel>
        <Select
          name="type"
          value={values.type}
          onChange={handleInputChange}
        >
         {TYPES.map(({value, label}) => (
          <option key={value} value={value}>{label}</option>
         ))}
        </Select>
        </FormControl>
      
       <FormControl>
            <FormLabel>Parent type</FormLabel>
            <Select
              name="parentType"
              value={values.parentType}
              onChange={handleInputChange}
            >
             {PARENT_TYPES.map(({value, label}) => (
              <option key={value} value={value}>{label}</option>
             ))}              
            </Select>
        </FormControl>
      
        <Checkbox
          name="required"
          checked={values.required}
          onChange={(e) =>
            setValues({...values, required: e.target.checked})
          }
        >
          Required
        </Checkbox>
                
        <Checkbox
          name="public"
          checked={values.public}
          onChange={(e) =>
            setValues({...values, public: e.target.checked})
          }
        >
          Public
        </Checkbox>
        
      <FormControl>
        <FormLabel>UI collection</FormLabel>
        <Input
          value={values.uiCollection}
          name="uiCollection"
          onChange={handleInputChange}
        />
      </FormControl>

        <Checkbox
          name="isMulti"
          checked={values.isMulti}
          onChange={(e) =>
            setValues({...values, isMulti: e.target.checked})
          }
        >
          Multi
        </Checkbox>
    </Stack>
  );
}

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
  Select,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export type CalculateOnType = 'LINE_ITEMS' | 'ORDER' | 'SHIPPING';
export type DiscountType = 'PERCENTAGE' | 'FIXED' | 'BUY_X_GET_Y' | 'FREE';
export type ProductSelection = 'ALL' | 'SPECIFIC';
export type CustomerSelection = 'ALL' | 'SPECIFIC';
export type MinimumAmountType = 'PURCHASE_AMOUNT' | 'QUANTITY';

const MINIMUM_AMOUNT_TYPE = [
  {value: 'PURCHASE_AMOUNT', label: 'PURCHASE_AMOUNT'},
  {value: 'QUANTITY', label: 'QUANTITY'},
]
const CUSTOMER_SELECTION = [
  {value: 'ALL', label: 'ALL'},
  {value: 'SPECIFIC', label: 'SPECIFIC'},
]
const PRODUCT_SELECTION = [
  {value: 'ALL', label: 'ALL'},
  {value: 'SPECIFIC', label: 'SPECIFIC'},
]
const CALCULATE_ON_TYPE = [
  {value: 'LINE_ITEMS', label: 'LINE_ITEMS'},
  {value: 'ORDER', label: 'ORDER'},
  {value: 'SHIPPING', label: 'SHIPPING'},
]
const DISCOUNT_TYPE = [
  {value: 'PERCENTAGE', label: 'PERCENTAGE'},
  {value: 'FIXED', label: 'FIXED'},
  {value: 'BUY_X_GET_Y', label: 'BUY_X_GET_Y'},
  {value: 'FREE', label: 'FREE'},
]

const BULK_BUY_PRODUCTS = [{ label: 'Product 1', value: '1' }, { label: 'Product 2', value: '2' }]
const COUNTRY_CODES = [{ label: 'United Kingdom', value: 'UK' }, { label: 'Germany', value: 'DE' }]

export interface DiscountRuleType {
  id: string;
  name: string;
  inceptsAtISO: string;
  expiresAtISO: string;

  maxUsageCount: number; // 0 = unlimited
  currentUsageCount: number;
  canUseWithOtherDiscounts: boolean;
  limitPerCustomer: number;
  limitPerOrder: number;

  type: DiscountType;
  calculateOn: CalculateOnType;
  discountValue: number;
  productSelection: ProductSelection;
  customerSelection: CustomerSelection;

  minimumAmountType: MinimumAmountType;
  minimumPurchaseAmount: number;
  minimumQuantityAmount: number;
  minimumSubTotalAmount: number;

  maxQuantityAmount: number;
  maxPurchaseAmount: number;
  maxSubTotalAmount: number;
  maxShippingRate: number;

  behaviorOnMaxReached: 'CALCULATE_UPTO' | 'EXCLUDE_DISCOUNT';

  customerIds: string[];
  productIds: string[];
  countryCodes: string[];
  bulkBuyProductIds: string[];
  bulkBuyQuantity: number;

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
  values: DiscountRuleType;
  setValues: React.Dispatch<React.SetStateAction<DiscountRuleType>>;
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
        Discount Rule
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
        <FormLabel>Incepts At ISO</FormLabel>
        <SingleDatepicker
          onDateChange={(date) =>
            setValues({ ...values, inceptsAtISO: date.toISOString() })
          }
          date={values.inceptsAtISO ? new Date(values.inceptsAtISO): new Date()}
        />
      </FormControl>
      
      <FormControl>
        <FormLabel>Expires At ISO</FormLabel>
        <SingleDatepicker
          onDateChange={(date) =>
            setValues({ ...values, expiresAtISO: date.toISOString() })
          }
          date={values.expiresAtISO ? new Date(values.expiresAtISO): new Date()}
        />
      </FormControl>
      
       <FormControl>
        <FormLabel>Max usage count</FormLabel>
        <NumberInput
          name="maxUsageCount"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, maxUsageCount: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.maxUsageCount}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>     
      
       <FormControl>
        <FormLabel>Current usage count</FormLabel>
        <NumberInput
          name="currentUsageCount"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, currentUsageCount: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.currentUsageCount}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>     
      
      <Checkbox
        name="canUseWithOtherDiscounts"
        checked={values.canUseWithOtherDiscounts}
        onChange={(e) =>
          setValues({...values, canUseWithOtherDiscounts: e.target.checked})
        }
      >
        Can use with other discounts
      </Checkbox>
      
       <FormControl>
        <FormLabel>Limit per customer</FormLabel>
        <NumberInput
          name="limitPerCustomer"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, limitPerCustomer: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.limitPerCustomer}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>     
      
       <FormControl>
        <FormLabel>Limit per order</FormLabel>
        <NumberInput
          name="limitPerOrder"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, limitPerOrder: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.limitPerOrder}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl> 
      
       <FormControl>
            <FormLabel>Type</FormLabel>
            <Select
              name="type"
              value={values.type}
              onChange={handleInputChange}              
            >
              {DISCOUNT_TYPE.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
       
       <FormControl>
            <FormLabel>Calculate on</FormLabel>
            <Select
              name="calculateOn"
              value={values.calculateOn}
              onChange={handleInputChange}              
            >
              {CALCULATE_ON_TYPE.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
        
        <FormControl>
        <FormLabel>Discount value</FormLabel>
        <NumberInput
          name="discountValue"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, discountValue: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.discountValue}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl> 
      
      <FormControl>
            <FormLabel>Product selection</FormLabel>
            <Select
              name="productSelection"
              value={values.productSelection}
              onChange={handleInputChange}              
            >
              {PRODUCT_SELECTION.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
      
      <FormControl>
            <FormLabel>Customer selection</FormLabel>
            <Select
              name="customerSelection"
              value={values.customerSelection}
              onChange={handleInputChange}              
            >
              {CUSTOMER_SELECTION.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
        
        <FormControl>
            <FormLabel>Country codes</FormLabel>
            <Select
              name="countryCodes"
              value={values.countryCodes}
              onChange={handleInputChange}              
            >
              {COUNTRY_CODES.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
        
        <FormControl>
            <FormLabel>Bulk buy product ids</FormLabel>
            <Select
              name="bulkBuyProductIds"
              value={values.bulkBuyProductIds}
              onChange={handleInputChange} 
              multiple={true}            
            >
              {BULK_BUY_PRODUCTS.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>

        <FormControl>
        <FormLabel>Bulk buy quantity</FormLabel>
        <NumberInput
          name="bulkBuyQuantity"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, bulkBuyQuantity: valueAsNumber })
          }
          defaultValue={1}
          min={1}
          value={values.bulkBuyQuantity}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl> 
    </Stack>
  );
}

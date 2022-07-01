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
import { Link } from "@remix-run/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

import type { DiscountRuleType} from "../discountrule/form";
import { BULK_BUY_PRODUCTS, CALCULATE_ON_TYPE, COUNTRY_CODES, CUSTOMER_SELECTION, DISCOUNT_TYPE, PRODUCT_SELECTION } from "../discountrule/form";

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
    
    if (name.includes('rule')) {
      const key = name.split('.')[1];
      setValues({
        ...values, rule: {
          ...values.rule,
          [key]: value,
        }
      })
    } else {
     setValues({
      ...values,
      [name]: value,
    }); 
    }    
  };

  return (
    <Stack w={["50%", "50%", "30%"]} spacing={3}>
      <Heading w={"fit-content"} margin={"2rem auto"}>
        Discount code
      </Heading>
      <Link style={{color: 'lightblue'}} to='/discountrule/new'>¿Create instead an Automatic Discount?</Link>
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
          value={values.rule.name}
          name="rule.name"
          onChange={handleInputChange}
        />
      </FormControl>
     
      <FormControl>
        <FormLabel>Code</FormLabel>
        <Input
          value={values.code}
          name="code"
          onChange={handleInputChange}
        />
      </FormControl>
      
      <FormControl>
        <FormLabel>Incepts At ISO</FormLabel>
        <SingleDatepicker
          onDateChange={(date) =>
            setValues({ ...values, rule: {...values.rule, inceptsAtISO: date.toISOString()} })
          }
          date={values.rule.inceptsAtISO ? new Date(values.rule.inceptsAtISO): new Date()}
        />
      </FormControl>
      
      <FormControl>
        <FormLabel>Expires At ISO</FormLabel>
        <SingleDatepicker
          onDateChange={(date) =>
            setValues({ ...values, rule: {...values.rule, expiresAtISO: date.toISOString()} })
          }
          date={values.rule.expiresAtISO ? new Date(values.rule.expiresAtISO): new Date()}
        />
      </FormControl>
      
       <FormControl>
        <FormLabel>Max usage count</FormLabel>
        <NumberInput
          name="rule.maxUsageCount"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, rule: {...values.rule, maxUsageCount: valueAsNumber} })
          }
          defaultValue={1}
          min={1}
          value={values.rule.maxUsageCount}
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
          name="rule.currentUsageCount"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, rule: {...values.rule, currentUsageCount: valueAsNumber} })
          }
          defaultValue={1}
          min={1}
          value={values.rule.currentUsageCount}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>     
      
      <Checkbox
        name="rule.canUseWithOtherDiscounts"
        checked={values.rule.canUseWithOtherDiscounts}
        onChange={(e) =>
          setValues({...values, rule: {...values.rule, canUseWithOtherDiscounts: e.target.checked}})
        }
      >
        Can use with other discounts
      </Checkbox>
      
       <FormControl>
        <FormLabel>Limit per customer</FormLabel>
        <NumberInput
          name="rule.limitPerCustomer"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, rule: {...values.rule, limitPerCustomer: valueAsNumber} })
          }
          defaultValue={1}
          min={1}
          value={values.rule.limitPerCustomer}
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
          name="rule.limitPerOrder"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, rule: {...values.rule, limitPerOrder: valueAsNumber} })
          }
          defaultValue={1}
          min={1}
          value={values.rule.limitPerOrder}
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
              name="rule.type"
              value={values.rule.type}
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
              name="rule.calculateOn"
              value={values.rule.calculateOn}
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
          name="rule.discountValue"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, rule: {...values.rule, discountValue: valueAsNumber} })
          }
          defaultValue={1}
          min={1}
          value={values.rule.discountValue}
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
              name="rule.productSelection"
              value={values.rule.productSelection}
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
              name="rule.customerSelection"
              value={values.rule.customerSelection}
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
              name="rule.countryCodes"
              value={values.rule.countryCodes}
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
              name="rule.bulkBuyProductIds"
              value={values.rule.bulkBuyProductIds}
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
          name="rule.bulkBuyQuantity"
          onChange={(valueAsString: string, valueAsNumber: number) =>
            setValues({ ...values, rule: {...values.rule, bulkBuyQuantity: valueAsNumber} })
          }
          defaultValue={1}
          min={1}
          value={values.rule.bulkBuyQuantity}
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

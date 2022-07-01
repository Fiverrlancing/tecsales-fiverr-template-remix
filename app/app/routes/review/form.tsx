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

export interface ReviewType {
  id: string;
  text: string;
  rating: number; // (out of 5)
  accountId: string;
  showName: boolean;
  orderId: string;
  productId: string;
  salesChannelId: string;
}

const ORDERS = [{ label: 'Order 1', value: '1' }, { label: 'Order 2', value: '2' }]
const PRODUCTS = [{ label: 'Product 1', value: '1' }, { label: 'Product 2', value: '2' }]
const SALES_CHANNEL = [{ label: 'SC 1', value: '1' }, { label: 'SC 2', value: '2' }]

export default function ({
  values,
  setValues,
  error,
  message,
}: {
  values: ReviewType;
  setValues: React.Dispatch<React.SetStateAction<ReviewType>>;
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
        Review
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
        
        {/* RATING */}
        <FormControl>
            <FormLabel>Rating</FormLabel>
            <Select
              name="rating"
              value={values.rating}
              onChange={handleInputChange}
            >
              <option value="0">0</option>
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
            </Select>
          </FormControl>
          
          {/* TEXT */}
          <FormControl>
            <FormLabel>Text</FormLabel>
            <Input
              name="text"
              value={values.text}
              onChange={handleInputChange}
            />                    
        </FormControl>
        
        {/* SHOW NAME */}
        <Checkbox
          name="showName"
          checked={values.showName}
          onChange={(e) =>
            setValues({...values, showName: e.target.checked})
          }
        >
          Show name
        </Checkbox>
        
        {/* ORDERS */}
        <FormControl>
            <FormLabel>Order</FormLabel>
            <Select
              name="orderId"
              value={values.orderId}
              onChange={handleInputChange}              
            >
              {ORDERS.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
        
        {/* PRODUCTS */}
        <FormControl>
            <FormLabel>Product</FormLabel>
            <Select
              name="productId"
              value={values.productId}
              onChange={handleInputChange}              
            >
              {PRODUCTS.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
        
        {/* SALES CHANNELS */}
        <FormControl>
            <FormLabel>Sales channel</FormLabel>
            <Select
              name="salesChannelId"
              value={values.salesChannelId}
              onChange={handleInputChange}              
            >
              {SALES_CHANNEL.map(({label, value}) => (
                <option value={value} key={value}>{label}</option>
              ))}              
            </Select>
        </FormControl>
    </Stack>
  );
}

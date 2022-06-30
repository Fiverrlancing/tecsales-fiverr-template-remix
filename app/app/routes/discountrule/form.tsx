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

export type CalculateOnType = 'LINE_ITEMS' | 'ORDER' | 'SHIPPING';
export type DiscountType = 'PERCENTAGE' | 'FIXED' | 'BUY_X_GET_Y' | 'FREE';
export type ProductSelection = 'ALL' | 'SPECIFIC';
export type CustomerSelection = 'ALL' | 'SPECIFIC';
export type MinimumAmountType = 'PURCHASE_AMOUNT' | 'QUANTITY';

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
    </Stack>
  );
}

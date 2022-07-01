import { Button, Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import type { DiscountRuleType } from "./form";
import Form from "./form";
import { getCreateDiscountRuleMutation } from "../../mutations/discountRule/createDiscountRule";
import { useMutation } from "@apollo/client";
import { useNavigate } from "@remix-run/react";

const initialValues: DiscountRuleType = {
  id: '',
  name: '',
  inceptsAtISO: new Date().toISOString(),
  expiresAtISO: new Date().toISOString(),

  maxUsageCount: 0, // 0 = unlimited
  currentUsageCount: 0,
  canUseWithOtherDiscounts: false,
  limitPerCustomer: 0,
  limitPerOrder: 0,

  type: 'PERCENTAGE',
  calculateOn: 'LINE_ITEMS',
  discountValue: 0,
  productSelection: 'ALL',
  customerSelection: 'ALL',

  minimumAmountType: 'PURCHASE_AMOUNT',
  minimumPurchaseAmount: 0,
  minimumQuantityAmount: 0,
  minimumSubTotalAmount: 0,

  maxQuantityAmount: 0,
  maxPurchaseAmount: 0,
  maxSubTotalAmount: 0,
  maxShippingRate: 0,

  behaviorOnMaxReached: 'CALCULATE_UPTO',

  customerIds: [],
  productIds: [],
  countryCodes: [],
  bulkBuyProductIds: ['1', '2'],
  bulkBuyQuantity: 0,

  createdAtISO: '',
  updatedAtISO: '',
  deletedAtISO: '',
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const [createDiscountRule, { error }] = useMutation(
    getCreateDiscountRuleMutation()
  );

  const [loading, setLoading] = useState(false);    

  const create = () => { 
    setLoading(true);
    createDiscountRule({
      variables: {
        ...values,        
      },        
    })
      .then(() => {
        setLoading(false);
        navigate("/discountRule/1");
      })
      .catch(() => {
        navigate("/error");
        setLoading(false);
      });
  };

  return (
    <>
      <Center>
        {loading ? (
          <Spinner size={"lg"} />
        ) : (
          <Form {...{ values, setValues }} error={error?.message} />
        )}
      </Center>
      <Center margin="1rem 0">
        <Button
          disabled={loading}
          margin="auto"
          colorScheme={"blue"}
          onClick={create}
        >
          Create
        </Button>
      </Center>
    </>
  );
}

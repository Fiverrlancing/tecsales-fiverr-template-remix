import { Button, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import type { DiscountRuleType } from "./form";
import Form from "./form";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "@remix-run/react";
import { getDiscountRules } from "../../queries/getDiscountRules";
import { getDeleteDiscountRule } from "../../mutations/discountRule/deleteDiscountRule";
import { getUpdateDiscountRuleMutation } from "../../mutations/discountRule/updateDiscountRule";

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
  bulkBuyProductIds: [],
  bulkBuyQuantity: 0,

  createdAtISO: '',
  updatedAtISO: '',
  deletedAtISO: '',
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const { loading, data, error } = useQuery(getDiscountRules(), {
    variables: { id },
  });

  const [deleteDiscountRule] = useMutation(getDeleteDiscountRule());
  const [updateDiscountRule] = useMutation(getUpdateDiscountRuleMutation());  
  const navigate = useNavigate();

  const onDelete = () => {
    setErrorMessage("")
    deleteDiscountRule({
      variables: {
        id,
      },
    })
    .then(({data}) => {
      setMessage(data.deleteDiscountRule.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  const onUpdate = () => {
    setMessage("")
    updateDiscountRule({
      variables: {
        ...values,
      },
    })
    .then(({data}) => {
      setMessage(data.updateDiscountRule.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  useEffect(() => {
    if (data) {
      setValues({
        ...data.getDiscountRules,       
      });
    }
  }, [data]);

  if (error?.graphQLErrors) {
    navigate("/error");
  }
  if (error?.networkError) {
    navigate("/error");
  }

  return (
    <>
      <Center>
        {loading ? (
          <Spinner size={"lg"} />
        ) : (
            <Form {...{ values, setValues }} error={error?.message || errorMessage} message={message} />
        )}
      </Center>
      <Center margin="1rem 0">
        <Button
          marginRight="1rem"
          disabled={loading}          
          colorScheme={"blue"}
          onClick={onUpdate}
        >
          Save
        </Button>
        <Button
          disabled={loading}
          color={"red"}
          onClick={onDelete}
        >
          Delete
        </Button>
      </Center>
    </>
  );
}

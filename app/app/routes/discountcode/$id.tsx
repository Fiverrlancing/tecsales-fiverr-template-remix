import { Button, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import type { DiscountCodeType } from "./form";
import Form from "./form";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "@remix-run/react";
import { getDiscountCode } from "../../queries/getDiscountCode";
import { getDeleteDiscountCode } from "../../mutations/discountCode/deleteDiscountCode";
import { getUpdateDiscountCodeMutation } from "../../mutations/discountCode/updateDiscountCode";

const initialValues: DiscountCodeType = {
  id: '',
  code: '',
  rule: {
    id: '',
  name: '',
  inceptsAtISO: '',
  expiresAtISO: '',

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
  },  

  createdAtISO: '',
  updatedAtISO: '',
  deletedAtISO: '',
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const { loading, data, error } = useQuery(getDiscountCode(), {
    variables: { id },
  });

  const [deleteDiscountCode] = useMutation(getDeleteDiscountCode());
  const [updateDiscountCode] = useMutation(getUpdateDiscountCodeMutation());  
  const navigate = useNavigate();

  const onDelete = () => {
    setErrorMessage("")
    deleteDiscountCode({
      variables: {
        id,
      },
    })
    .then(({data}) => {
      console.log("🚀 ~ file: $id.tsx ~ line 51 ~ onDelete.then ~ data", data)
      setMessage(data.deleteDiscountCode.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  const onUpdate = () => {
    // TODO: delete
    const values = {
     code: 'updated code',
     rule: {
      id: '1',
      name: 'sebas',
      inceptsAtISO: '222',
      expiresAtISO: '2222',

      maxUsageCount: 222, // 0 = unlimited
      currentUsageCount: 2222,
      canUseWithOtherDiscounts: true,
      limitPerCustomer: 2222,
      limitPerOrder: 22222,

      type: 'PERCENTAGE',
      calculateOn: 'LINE_ITEMS',
      discountValue: 2222,
      productSelection: 'ALL',
      customerSelection: 'ALL',

      minimumAmountType: 'PURCHASE_AMOUNT',
      minimumPurchaseAmount: 222222,
      minimumQuantityAmount: 222222,
      minimumSubTotalAmount: 222222,

      maxQuantityAmount: 222222,
      maxPurchaseAmount: 222222,
      maxSubTotalAmount: 222222,
      maxShippingRate: 222222,

      behaviorOnMaxReached: 'CALCULATE_UPTO',

      customerIds: ['2', '2'],
      productIds: ['2', '2'],
      countryCodes: ['2', '2'],
      bulkBuyProductIds: ['2', '2'],
      bulkBuyQuantity: 222222,
     }
    }
    setMessage("")
    updateDiscountCode({
      variables: {
        id,
        ...values,
        rule: {
          ...values.rule,
          id: '1',
        }
      },
    })
    .then(({data}) => {
      console.log("🚀 ~ file: $id.tsx ~ line 66 ~ onUpdate.then ~ data", data)
      setMessage(data.updateDiscountCode.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  useEffect(() => {
    if (data) {
      console.log("🚀 ~ file: $id.tsx ~ line 72 ~ useEffect ~ data", data)
      setValues({
        ...data.getDiscountCode,       
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
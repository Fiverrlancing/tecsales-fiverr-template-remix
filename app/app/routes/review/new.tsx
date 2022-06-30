import { Button, Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import type { ReviewType } from "./form";
import Form from "./form";
import { getCreateReviewMutation } from "../../mutations/review/createReview";
import { useMutation } from "@apollo/client";
import { useNavigate } from "@remix-run/react";

const initialValues: ReviewType = {
  id: '',
  text: '',
  rating: 0, // (out of 5)
  accountId: '',
  showName: false,
  orderId: '',
  productId: '',
  salesChannelId: '',
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const [createReview, { error }] = useMutation(
    getCreateReviewMutation()
  );

  const [loading, setLoading] = useState(false);    

  const create = () => { 
    // TODO: delete
    const values = {
      id: '',
      text: 'blablabla',
      rating: 5, // (out of 5)
      accountId: '23',
      showName: false,
      orderId: '23',
      productId: '12',
      salesChannelId: '11',
    }   
    setLoading(true);
    createReview({
      variables: {
        ...values,        
      },        
    })
      .then(() => {
        setLoading(false);
        navigate("/review/1");
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

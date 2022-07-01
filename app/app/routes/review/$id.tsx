import { Button, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import type { ReviewType } from "./form";
import Form from "./form";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "@remix-run/react";
import { getReview } from "../../queries/getReview";
import { getDeleteReview } from "../../mutations/review/deleteReview";
import { getUpdateReviewMutation } from "../../mutations/review/updateReview";

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
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const { loading, data, error } = useQuery(getReview(), {
    variables: { id },
  });

  const [deleteReview] = useMutation(getDeleteReview());
  const [updateReview] = useMutation(getUpdateReviewMutation());  
  const navigate = useNavigate();

  const onDelete = () => {
    setErrorMessage("")
    deleteReview({
      variables: {
        id,
      },
    })
    .then(({data}) => {
      setMessage(data.deleteReview.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  const onUpdate = () => {
    setMessage("")
    updateReview({
      variables: {
        ...values, rating: +values.rating
      },
    })
    .then(({data}) => {
      setMessage(data.updateReview.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  useEffect(() => {
    if (data) {
      setValues({
        ...data.getReview,        
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

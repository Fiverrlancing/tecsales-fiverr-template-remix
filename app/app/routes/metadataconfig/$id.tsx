import { Button, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MetaDataConfigTypeType, MetaDataConfigParentType } from "./form";
import type { MetaDataConfigType } from "./form";
import Form from "./form";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "@remix-run/react";
import { getMetaDataConfig } from "../../queries/getMetaDataConfig";
import { getDeleteMetaDataConfig } from "../../mutations/metaDataConfig/deleteMetaDataConfig";
import { getUpdateMetaDataConfigMutation } from "../../mutations/metaDataConfig/updateMetaDataConfig";

const initialValues: MetaDataConfigType = {
  id: '',
  name: '',
  collection: '',
  key: '',
  type: MetaDataConfigTypeType.TEXT,
  parentType: MetaDataConfigParentType.INVENTORY_ITEM,
  required: false,
  public: false,
  uiCollection: '',
  isMulti: false,
  createdAtISO: '',
  updatedAtISO: '',
  deletedAtISO: '',
};

export default function () {
  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const { loading, data, error } = useQuery(getMetaDataConfig(), {
    variables: { id },
  });

  const [deleteMetaDataConfig] = useMutation(getDeleteMetaDataConfig());
  const [updateMetaDataConfig] = useMutation(getUpdateMetaDataConfigMutation());  
  const navigate = useNavigate();

  const onDelete = () => {
    setErrorMessage("")
    deleteMetaDataConfig({
      variables: {
        id,
      },
    })
    .then(({data}) => {
      console.log("🚀 ~ file: $id.tsx ~ line 51 ~ onDelete.then ~ data", data)
      setMessage(data.deleteMetaDataConfig.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  const onUpdate = () => {
    // TODO: delete
    const values = {
      id: '1',
      name: 'updated test',
      collection: 'updated 12',
      key: 'updated 12',
      type: MetaDataConfigTypeType.DATE,
      parentType: MetaDataConfigParentType.INVENTORY_UNIT,
      required: true,
      public: true,
      uiCollection: 'updated 12',
      isMulti: true,
      createdAtISO: '',
      updatedAtISO: '',
      deletedAtISO: '',
    }
    setMessage("")
    updateMetaDataConfig({
      variables: {
        ...values,
      },
    })
    .then(({data}) => {
      console.log("🚀 ~ file: $id.tsx ~ line 66 ~ onUpdate.then ~ data", data)
      setMessage(data.updateMetaDataConfig.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })      
  };

  useEffect(() => {
    if (data) {
      console.log("🚀 ~ file: $id.tsx ~ line 72 ~ useEffect ~ data", data)
      setValues({
        ...data.getMetaDataConfig,        
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

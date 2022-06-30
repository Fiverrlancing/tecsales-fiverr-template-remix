import { Button, Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import type { MetaDataConfigType} from "./form";
import { MetaDataConfigParentType, MetaDataConfigTypeType } from "./form";
import Form from "./form";
import { getCreateMetaDataConfigMutation } from "../../mutations/metaDataConfig/createMetaDataConfig";
import { useMutation } from "@apollo/client";
import { useNavigate } from "@remix-run/react";

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
  const navigate = useNavigate();

  const [createMetaDataConfig, { error }] = useMutation(
    getCreateMetaDataConfigMutation()
  );

  const [loading, setLoading] = useState(false);    

  const create = () => { 
    // TODO: delete
    const values = {
      id: '',
      name: 'test',
      collection: '12',
      key: '12',
      type: MetaDataConfigTypeType.TEXT,
      parentType: MetaDataConfigParentType.INVENTORY_ITEM,
      required: false,
      public: false,
      uiCollection: '12',
      isMulti: false,
      createdAtISO: '',
      updatedAtISO: '',
      deletedAtISO: '',
    }   
    setLoading(true);
    createMetaDataConfig({
      variables: {
        ...values,        
      },        
    })
      .then(() => {
        setLoading(false);
        navigate("/metadataconfig/1");
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

import { gql } from "@apollo/client";

export const getDeleteMetaDataConfig = () => {
  return gql`
    mutation deleteMetaDataConfig($id: ID!) {
      deleteMetaDataConfig(input: { id: $id }) {
        message
      }
    }
  `;
};

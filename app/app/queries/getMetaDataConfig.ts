import { gql } from "@apollo/client";

export const getMetaDataConfig = () => {
  return gql`
    query getMetaDataConfig($id: String!) {
      getMetaDataConfig(id: $id) {
        id
        name
        collection
        key
        type
        parentType
        required
        public
        uiCollection
        isMulti
        createdAtISO
        updatedAtISO
        deletedAtISO
      }
    }
  `;
};

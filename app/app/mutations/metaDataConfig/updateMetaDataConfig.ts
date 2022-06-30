import { gql } from "@apollo/client";

export const getUpdateMetaDataConfigMutation = () => {
  return gql`
    mutation updateMetaDataConfig(
      $id: ID!
      $name: String!
      $collection: String
      $key: String!
      $type: MetaDataConfigType!
      $parentType: MetaDataConfigParentType!
      $required: Boolean!
      $public: Boolean!
      $uiCollection: String
      $isMulti: Boolean!
    ) {
      updateMetaDataConfig(
        input: {
          id: $id
           name: $name
          collection: $collection
          key: $key
          type: $type
          parentType: $parentType
          required: $required
          public: $public
          uiCollection: $uiCollection
          isMulti: $isMulti
        }
      ) {
        message
      }
    }
  `;
};

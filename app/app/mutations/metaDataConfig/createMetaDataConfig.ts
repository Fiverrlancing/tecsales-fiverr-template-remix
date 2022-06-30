import { gql } from "@apollo/client";

export const getCreateMetaDataConfigMutation = () => {
  return gql`
    mutation createMetaDataConfig(
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
      createMetaDataConfig(
        input: {
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

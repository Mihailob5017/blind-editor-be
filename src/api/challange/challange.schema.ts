import { gql } from 'apollo-server-express';
export const typeDef = gql`
  type Query {
    challange: String
  }
`;

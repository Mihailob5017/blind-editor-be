import { gql } from 'apollo-server-express';
export const typeDef = gql`
  type Query {
    challange: String
  }

  type Mutation {
    executeCode(challangeId: String, code: String): Result
  }

  type Result {
    result: Boolean
  }
`;

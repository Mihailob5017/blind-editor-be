// Challange
import ChallangeResolver from '../api/challange/challange.resolver';
import { typeDef as ChallangeQuery } from '../api/challange/challange.schema';

// Leadership
import LeadershipResolver from '../api/leadership/leadership.resolver';
import { typeDef as LeadershipQuery } from '../api/leadership/leadership.schema';

// Signup
import SignupResolver from '../api/signup/signup.resolver';
import { typeDef as SignupQuery } from '../api/signup/signup.schema';

export const ApolloServerConfig = {
  typeDefs: [ChallangeQuery, LeadershipQuery, SignupQuery],
  resolvers: [ChallangeResolver, LeadershipResolver, SignupResolver],
};

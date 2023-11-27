import { constructorFunction } from '../../helpers/constants';
import { ChallengeService } from '../../services/Challange.service';
const Resolver = {
  Query: {
    challange: () => 'Hello from the challange page',
  },
  Mutation: {
    executeCode: async (
      _: any,
      { challangeId, code }: { challangeId: String; code: String },
    ) => {
      try {
        const args = '12,2';
        const restructuredCode = await constructorFunction(code, args);
        const resp = await ChallengeService.executeCode({
          code: restructuredCode,
          args: args,
          output: 24,
          outputType: 'number',
        });

        console.log(resp);
        return { result: true };
      } catch (error) {
        console.log(error);
        return { result: false };
      }
    },
  },
};

export default Resolver;

import {
  ExecuteCodeInput,
  ExecuteCodeOutput,
} from '..//helpers/types/Service.types';

import {
  JavascriptVM,
  constructorFunction,
  compareResults,
} from '../helpers/constants';

export class ChallengeService {
  public static async executeCode(
    executionArgs: ExecuteCodeInput,
  ): Promise<ExecuteCodeOutput> {
    try {
      const restructuredCode = constructorFunction(
        executionArgs.code,
        executionArgs.args,
      );
      const output = await JavascriptVM.run(restructuredCode);
      return {
        success: compareResults(
          output,
          executionArgs.output,
          executionArgs.outputType,
        ),
      };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  }
}

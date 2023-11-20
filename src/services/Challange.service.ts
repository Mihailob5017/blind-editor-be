import {
  ExecuteJSCodeInput,
  ExecuteJSCodeOutput,
  ExecutePythonCodeInput,
  ExecutePythonCodeOutput,
} from 'helpers/types/Service.types';

import { JavascriptVM } from 'helpers/constants';
import { PythonVM } from 'helpers/constants';

export class ChallengeService {
  public static async executeJSCode(
    input: ExecuteJSCodeInput,
  ): Promise<ExecuteJSCodeOutput> {
    try {
      const output = await JavascriptVM.run(input.code);
      if (output.error) throw new Error(output.error);
      if (output.result !== input.test.ouput) return { success: false };
      return { success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  }

  public static async executePythonCode(
    input: ExecutePythonCodeInput,
  ): Promise<ExecutePythonCodeOutput> {
    const options = {
      mode: 'text',
      pythonPath: 'path/to/python',
      pythonOptions: ['-u'], // get print results in real-time
      scriptPath: 'path/to/my/scripts',
      args: ['value1', 'value2', 'value3'],
    };

    try {
      const output = await PythonVM.runString(input.code, options as any).then(
        (response) => {
          console.log(response);
          return response[0];
        },
      );
      if (output.error) throw new Error(output.error);
      if (output.result !== input.test.ouput) return { success: false };

      return { success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  }
}

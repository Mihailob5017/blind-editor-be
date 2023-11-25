interface CodeExecutionOptions {}

export interface ExecuteCodeInput {
  code: string;
  args: string;
  output: any;
  outputType: string;
}

export interface ExecuteCodeOutput {
  success: boolean;
}

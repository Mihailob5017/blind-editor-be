interface CodeExecutionOptions {}

export interface ExecuteJSCodeInput {
  code: string;
  test: any;
  options: CodeExecutionOptions;
}

export interface ExecuteJSCodeOutput {
  success: boolean;
}

export interface ExecutePythonCodeInput {
  code: string;
  test: any;
  options: CodeExecutionOptions;
}

export interface ExecutePythonCodeOutput {
  success: boolean;
}

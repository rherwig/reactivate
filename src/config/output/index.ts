import * as merge from 'webpack-merge';
import { resolve } from 'path';
import { Configuration, Output } from 'webpack';

type TOptions = {
  context?: string
};

export default (
  output: Output,
  options: TOptions = {}
) => (config: Configuration = {}) => {
  if (typeof output.path !== 'string') {
    return config;
  }

  return merge(config, {
    output: {
      ...output,
      path: typeof options.context !== 'string'
        ? output.path
        : resolve(options.context, output.path)
    }
  })
};

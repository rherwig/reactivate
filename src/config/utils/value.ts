import * as merge from 'webpack-merge';
import { Configuration } from 'webpack';

type Options = {
  [key: string]: string | boolean;
};

export default (options: Options) => (config: Configuration = {}) => {
  const values = Object.keys(options).reduce((result, key) => {
    return {
      ...result,
      [key]: options[key]
    };
  }, {});

  return merge(config, values);
};

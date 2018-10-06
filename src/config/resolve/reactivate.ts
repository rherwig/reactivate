import * as merge from 'webpack-merge';
import { resolve } from 'path';
import { Configuration } from 'webpack';

type Options = {
  context?: string;
  reactivateContext?: string;
};

export default (options: Options) => (config: Configuration = {}) => {
  return merge(config, {
    resolve: {
      modules: [
        options.context ? resolve(options.context, 'node_modules') : 'node_modules',
        options.reactivateContext ? resolve(options.reactivateContext, 'node_modules') : 'node_modules'
      ]
    }
  })
};

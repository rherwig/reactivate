import * as merge from 'webpack-merge';
import { Configuration } from 'webpack';

export default (
  config: Configuration,
  ...params: Array<Function>
): Configuration => {
  return params.reduce((result, param) => {
    return merge({}, param(result));
  }, config);
};

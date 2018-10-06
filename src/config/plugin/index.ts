import * as merge from 'webpack-merge';
import { Configuration } from 'webpack';

export default (plugin: any) => (config: Configuration = {}) => {
  return merge(config, {
    plugins: [
      plugin
    ]
  });
};

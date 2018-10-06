import * as merge from 'webpack-merge';
import { Configuration } from 'webpack';

export default (
  extensions: string[]
) => (config: Configuration = {}) => merge(config, {
  resolve: {
    extensions
  }
});

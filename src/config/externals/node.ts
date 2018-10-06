import * as merge from 'webpack-merge';
import * as nodeExternals from 'webpack-node-externals';
import { Configuration } from 'webpack';

export default () => (config: Configuration = {}) => merge(config, {
  externals: [nodeExternals()]
});

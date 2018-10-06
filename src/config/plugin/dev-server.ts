import webpack = require('webpack');
import { Configuration } from 'webpack';

import pipeMerge from '../utils/pipe-merge';
import entry from '../entry';
import plugin from '../plugin';

export default () => (config: Configuration = {}) => {
  return pipeMerge(
    config,
    entry([require.resolve('webpack-hot-middleware/client')], {
      strategy: 'prepend'
    }),
    plugin(new webpack.HotModuleReplacementPlugin())
  );
};

import { VueLoaderPlugin } from 'vue-loader';
import { Configuration, RuleSetRule } from 'webpack';

import pipeMerge from '../utils/pipe-merge';
import extensions from '../resolve/extensions';
import rule from './';
import plugin from '../plugin';

const ruleConfig: RuleSetRule = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use: require.resolve('vue-loader')
};

export default () => (config: Configuration = {}) => pipeMerge(
  config,
  extensions(['.vue']),
  rule(ruleConfig),
  plugin(new VueLoaderPlugin()),
);

import { RuleSetRule } from 'webpack';

import rule from './';
import { IMAGE_REGEX } from '../../constants/loader';

const ruleConfig: RuleSetRule = {
  test: IMAGE_REGEX,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('file-loader'),
    options: {
      name: 'images/[name].[ext]'
    }
  }
};

export default () => rule(ruleConfig);

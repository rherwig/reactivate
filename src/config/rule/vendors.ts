import { RuleSetRule } from 'webpack';

import rule from './';
import { VENDOR_REGEX } from '../../constants/loader';

const ruleConfig: RuleSetRule = {
  test: VENDOR_REGEX,
  include: /node_modules/,
  use: {
    loader: require.resolve('file-loader'),
    options: {
      name: 'vendor/[name].[ext]'
    }
  }
};

export default () => rule(ruleConfig);

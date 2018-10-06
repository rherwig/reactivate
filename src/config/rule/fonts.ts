import { RuleSetRule } from 'webpack';

import rule from './';
import { FONT_REGEX } from '../../constants/loader';

const ruleConfig: RuleSetRule = {
  test: FONT_REGEX,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('file-loader'),
    options: {
      name: 'fonts/[name].[ext]'
    }
  }
};

export default () => rule(ruleConfig);

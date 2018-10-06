import * as merge from 'webpack-merge';
import { Configuration, RuleSetRule } from 'webpack';

export default (rule: RuleSetRule) => (config: Configuration = {}) => {
  return merge.smart(config, {
    module: {
      rules: [
        rule
      ]
    }
  });
};

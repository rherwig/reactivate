import { RuleSetRule } from 'webpack';

import rule from './';

const getPresets = () => {
  return [
    [require.resolve('@babel/preset-env'), {
      loose: true
    }],
    require.resolve('@babel/preset-react')
  ]
};

const getPlugins = () => {
  return [];
};

const ruleConfig: RuleSetRule = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: getPresets(),
      plugins: getPlugins()
    }
  }
};

export default () => rule(ruleConfig);

import { RuleSetRule } from 'webpack';

import rule from './';
import { StylesConfig } from '../../interfaces/StylesConfig';

const createRule = (regex: RegExp, loader?: string, modules: boolean = false): RuleSetRule => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        modules
      }
    },
  ];

  if (typeof loader === 'string') {
    loaders.push(require.resolve(loader));
  }

  return {
    test: regex,
    exclude: /node_modules/,
    use: loaders,
  };
};

export default (options: StylesConfig) => {
  const { preprocessor, modules } = options;
  let ruleConfig = createRule(/\.css$/, undefined, modules);

  switch (preprocessor) {
    case 'less':
      ruleConfig = createRule(/\.(le|c)ss$/, 'less-loader', modules);
      break;
    case 'scss':
    case 'sass':
      ruleConfig = createRule(/\.(sa|sc|c)ss$/, 'scss-loader', modules);
      break;
    case 'stylus':
      ruleConfig = createRule(/\.(styl|css)$/, 'stylus-loader', modules);
      break;
  }

  return rule(ruleConfig);
};

import * as merge from 'webpack-merge';
import { resolve } from 'path';
import * as HtmlPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

type Template = {
  template: string
};

type Options = {
  context?: string
};

export default (
  { template }: Template,
  options: Options = {}
) => (config: Configuration = {}) => {
  return merge(config, {
    plugins: [
      new HtmlPlugin({
        template: typeof options.context !== 'string'
          ? template
          : resolve(options.context, template)
      })
    ]
  });
};

import * as express from 'express';
import * as webpack from 'webpack';
import * as devMiddleware from 'webpack-dev-middleware';
import * as hotMiddleware from 'webpack-hot-middleware';

import { ReactivateConfig } from '../../interfaces/ReactivateConfig';
import getWebpackConfig from '../../templates/base/webpack/serve';

export default (config: ReactivateConfig) => {
  const app = express();

  const webpackConfig = getWebpackConfig(config);
  const compiler = webpack(webpackConfig);

  if (typeof webpackConfig.output !== 'object') {
    throw new TypeError('webpack output is not an object');
  }

  if (typeof webpackConfig.output.publicPath !== 'string') {
    throw new TypeError('webpack publicPath is not defined');
  }

  app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(hotMiddleware(compiler));

  app.listen(3000, () => {
    console.info(`Development server listening on port 3000...`);
  });
};

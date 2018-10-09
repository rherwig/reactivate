import * as express from 'express';
import * as webpack from 'webpack';
import * as devMiddleware from 'webpack-dev-middleware';
import * as hotMiddleware from 'webpack-hot-middleware';
import hotServerMiddleware = require('webpack-hot-server-middleware');

import { ReactivateConfig } from '../../interfaces/ReactivateConfig';
import { Store } from '../../modules/store';
import getClientConfig from '../../templates/react-universal/webpack/client.dev';
import getServerConfig from '../../templates/react-universal/webpack/server.dev';

export default (config: ReactivateConfig) => {
  const app = express();

  Store.getInstance().setServer(app);
  console.log('===');
  console.log('Setting server...');
  console.log('===');

  const clientConfig = getClientConfig(config);
  const serverConfig = getServerConfig(config);

  if (typeof clientConfig.output === 'undefined') {
    throw new TypeError('output is not defined.');
  }

  const { publicPath, path } = clientConfig.output;
  const multiCompiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers[0];

  if (typeof clientConfig.output !== 'object') {
    throw new TypeError('webpack output is not an object');
  }

  if (typeof publicPath !== 'string') {
    throw new TypeError('webpack publicPath is not defined');
  }

  if (typeof path === 'undefined') {
    throw new TypeError('webpack path is not defined');
  }

  app.use(devMiddleware(multiCompiler, {
    publicPath: publicPath
  }));

  app.use(hotMiddleware(clientCompiler));

  app.use(publicPath, express.static(path));

  app.use(hotServerMiddleware(multiCompiler, {
    serverRendererOptions: {
      outputPath: path
    }
  }));

  app.listen(3000, () => {
    console.info(`Development server listening on port 3000...`);
  });
};

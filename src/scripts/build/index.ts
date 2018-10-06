import * as webpack from 'webpack';

import { ReactivateConfig } from '../../interfaces/ReactivateConfig';
import getWebpackConfig from '../../templates/base';

export default (config: ReactivateConfig, isProduction: boolean) => {
  const webpackConfig = getWebpackConfig(isProduction)(config);

  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err);
    }
  });
};

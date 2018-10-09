import createBaseConfig from '../../base/webpack/dev';

import { ReactivateConfig } from '../../../interfaces/ReactivateConfig';
import pipeMerge from '../../../config/utils/pipe-merge';
import value from '../../../config/utils/value';
import entry from '../../../config/entry';
import output from '../../../config/output';
import nodeExternals from '../../../config/externals/node';
import { ReactivateEntry } from '../../../types/ReactivateEntry';

export default (config: ReactivateConfig) => {
  const { client, server } = (<ReactivateEntry> config.entry);
  if (typeof client !== 'string' || typeof server !== 'string') {
    throw new TypeError('client and server entries have to be strings.');
  }

  return pipeMerge(
    createBaseConfig(config),
    value({ name: 'server' }),
    value({ target: 'node' }),
    entry(server, { context: config.context }),
    output({
      ...config.output,
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    }, { context: config.context }),
    nodeExternals(),
  );
}

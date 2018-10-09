import createBaseConfig from '../../base/webpack/serve';

import { ReactivateConfig } from '../../../interfaces/ReactivateConfig';
import pipeMerge from '../../../config/utils/pipe-merge';
import value from '../../../config/utils/value';
import entry from '../../../config/entry';
import output from '../../../config/output';
import { ReactivateEntry } from '../../../types/ReactivateEntry';

export default (config: ReactivateConfig) => {
  const { client, server } = (<ReactivateEntry> config.entry);
  if (typeof client !== 'string' || typeof server !== 'string') {
    throw new TypeError('client and server entries have to be strings.');
  }

  return pipeMerge(
    createBaseConfig(config),
    value({ name: 'client' }),
    value({ target: 'web' }),
    entry(client, { context: config.context }),
    output({
      ...config.output,
      filename: 'client.js'
    }, { context: config.context })
  );
}

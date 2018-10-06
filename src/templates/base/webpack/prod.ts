import { ReactivateConfig } from '../../../interfaces/ReactivateConfig';
import pipeMerge from '../../../config/utils/pipe-merge';
import createBaseConfig from './';
import value from '../../../config/utils/value';

export default (config: ReactivateConfig) => {
  return pipeMerge(
    createBaseConfig(config),
    value({ 'mode': 'production' }),
    value({ 'devtool': 'source-map' }),
  );
};

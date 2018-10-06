import { ReactivateConfig } from '../../../interfaces/ReactivateConfig';
import pipeMerge from '../../../config/utils/pipe-merge';
import createBaseConfig from './';
import value from '../../../config/utils/value';

export default (config: ReactivateConfig) => {
  return pipeMerge(
    createBaseConfig(config),
    value({ 'mode': 'development' }),
    value({ 'devtool': 'cheap-module-eval-source-map' }),
  );
};

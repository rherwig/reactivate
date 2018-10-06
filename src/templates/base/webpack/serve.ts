import { ReactivateConfig } from '../../../interfaces/ReactivateConfig';
import pipeMerge from '../../../config/utils/pipe-merge';
import createBaseConfig from './dev';
import devServer from '../../../config/plugin/dev-server';

export default (config: ReactivateConfig) => {
  return pipeMerge(
    createBaseConfig(config),
    devServer(),
  );
};

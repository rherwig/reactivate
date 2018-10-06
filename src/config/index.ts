import { resolve } from 'path';
import * as logSymbols from 'log-symbols';

import { ReactivateConfig } from '../interfaces/ReactivateConfig';
import { ReactivateUserConfig } from '../interfaces/ReactivateUserConfig';
import defaults from './defaults';

const DEFAULT_CONFIG_NAME = 'reactivate.config.js';

export default (configFile?: string): ReactivateConfig => {
  let configName = configFile || DEFAULT_CONFIG_NAME;
  let userConfig: ReactivateUserConfig = {};

  try {
    userConfig = typeof defaults.context === 'string'
      ? require(resolve(defaults.context, configName))
      : configName;
  } catch (e) {
    console.info(logSymbols.info, 'No configuration found. Using defaults.');
  }

  return {
    ...defaults,
    ...userConfig,
  };
};

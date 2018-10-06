import * as merge from 'webpack-merge';
import { Configuration } from 'webpack';

type TAlias = {
  [key: string]: string
};

export default (alias: TAlias) => (config: Configuration = {}) => merge(config, {
  resolve: {
    alias
  }
});

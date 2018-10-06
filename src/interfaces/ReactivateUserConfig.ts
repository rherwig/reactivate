import { Entry } from 'webpack';
import { Output } from 'webpack';

export interface ReactivateUserConfig {
  context?: string;
  reactivateContext?: string;
  entry?: string | string[] | Entry;
  output?: Output;
  template?: string;
  universal?: boolean;
}

import { Output } from 'webpack';

import { StylesConfig } from './StylesConfig';
import { ReactivateEntry } from '../types/ReactivateEntry';

type FrameworkType = 'react' | 'vue';

export interface ReactivateConfig {
  context: string;
  reactivateContext: string;
  entry: string | string[] | ReactivateEntry;
  output: Output;
  template: string;
  framework: FrameworkType;
  styles: StylesConfig;
  universal?: boolean;
}

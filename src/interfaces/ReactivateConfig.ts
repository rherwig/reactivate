import { Entry } from 'webpack';
import { Output } from 'webpack';
import { StylesConfig } from './StylesConfig';

type FrameworkType = 'react' | 'vue';

export interface ReactivateConfig {
  context: string;
  reactivateContext: string;
  entry: string | string[] | Entry;
  output: Output;
  template: string;
  framework: FrameworkType;
  styles: StylesConfig;
  universal?: boolean;
}

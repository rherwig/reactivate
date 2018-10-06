import { resolve } from 'path';
import { ReactivateConfig } from '../interfaces/ReactivateConfig';

const defaultConfig: ReactivateConfig = {
  context: process.cwd(),
  reactivateContext: resolve(__dirname, '../../'),
  entry: 'src/index.js',
  output: {
    path: 'dist',
    filename: 'app.js',
    publicPath: '/'
  },
  template: 'src/index.html',
  framework: 'react',
  styles: {
    preprocessor: 'css',
    modules: false,
  },
  universal: false,
};

export default defaultConfig;

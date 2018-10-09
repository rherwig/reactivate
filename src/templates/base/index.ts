import dev from './webpack/dev';
import prod from './webpack/prod';

export default (isProduction: boolean) => {
  return isProduction ? prod : dev;
};

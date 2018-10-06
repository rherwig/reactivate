import dev from './webpack/dev';
import prod from './webpack/prod';

export default (isProduction: boolean) => {
  console.log(isProduction);
  return isProduction ? prod : dev;
};

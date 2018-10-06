import value from './value';
import { Configuration } from 'webpack';

interface ExtendedConfiguration extends Configuration {
  key?: any;
}

describe('webpack partial value', () => {
  it('adds provided value', () => {
    const result: ExtendedConfiguration = value({ 'key': 'value' })();

    expect(result.key).toEqual('value');
  });
});

import { resolve } from 'path';
import reactivateResolve from './reactivate';

describe('webpack partial reactivate resolve', () => {
  it('resolves project node_modules', () => {
    const result = reactivateResolve({
      context: __dirname,
      reactivateContext: resolve(__dirname, 'reactivate')
    })();

    if (typeof result.resolve !== 'object') {
      throw new TypeError('resolve is not an object');
    }

    expect(result.resolve.modules).toContainEqual(
      resolve(__dirname, 'node_modules')
    );
  });

  it('resolves project node_modules', () => {
    const result = reactivateResolve({
      context: __dirname,
      reactivateContext: resolve(__dirname, 'reactivate')
    })();

    if (typeof result.resolve !== 'object') {
      throw new TypeError('resolve is not an object');
    }

    expect(result.resolve.modules).toContainEqual(
      resolve(__dirname, 'reactivate', 'node_modules')
    );
  });
});

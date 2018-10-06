import { HotModuleReplacementPlugin } from 'webpack';

import devServer from './dev-server';

describe('webpack plugin dev server', () => {
  it('prepends dev server entry', () => {
    const result = devServer()();

    if (!Array.isArray(result.entry)) {
      throw new TypeError('entry is not an array');
    }

    expect(result.entry.shift()).toEqual(require.resolve('webpack-hot-middleware/client'));
  });

  it('adds hmr plugin', () => {
    const result = devServer()();

    if (!Array.isArray(result.plugins)) {
      throw new TypeError('entry is not an array');
    }

    expect(result.plugins.shift() instanceof HotModuleReplacementPlugin).toBe(true);
  });
});

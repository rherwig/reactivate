import { VueLoaderPlugin } from 'vue-loader';

const vue = require('./vue');

describe('webpack rule vue', () => {
  it('adds vue rule', () => {
    const result = vue()();

    if (typeof result.module !== 'object') {
      throw new TypeError('module is not an object');
    }

    if (!Array.isArray(result.module.rules)) {
      throw new TypeError('rules is not an array');
    }

    const rule = result.module.rules.shift();

    expect(rule.use).toEqual(require.resolve('vue-loader'));
  });

  it('adds vue loader plugin', () => {
    const result = vue()();

    if (typeof result.module !== 'object') {
      throw new TypeError('module is not an object');
    }

    if (!Array.isArray(result.module.rules)) {
      throw new TypeError('rules is not an array');
    }

    expect(result.plugins.shift() instanceof VueLoaderPlugin).toEqual(true);
  });
});

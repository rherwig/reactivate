import plugin from './';

describe('webpack partial plugin', () => {
  it('adds plugin', () => {
    const result = plugin('plugin')();

    expect(result.plugins).toContainEqual('plugin');
  });
});

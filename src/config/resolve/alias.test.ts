import alias from './alias';

describe('webpack partial alias', () => {
  it('adds alias', () => {
    const result = alias({ key: 'value' })();

    if (typeof result.resolve !== 'object' || typeof result.resolve.alias !== 'object') {
      throw new TypeError('resolve is not an object');
    }

    expect(result.resolve.alias.key).toEqual('value');
  });
});

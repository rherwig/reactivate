import nodeExternals from './node';

describe('webpack partial node externals', () => {
  it('contains an externals array', () => {
    const result = nodeExternals()();

    expect(Array.isArray(result.externals)).toBe(true);
  });
});

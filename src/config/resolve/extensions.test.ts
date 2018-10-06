import extensions from './extensions';

describe('webpack partial alias', () => {
  it('adds extension', () => {
    const result = extensions(['.js'])();

    if (typeof result.resolve !== 'object') {
      throw new TypeError('resolve is not an object');
    }

    expect(result.resolve.extensions).toEqual(['.js']);
  });

  it('appends extension', () => {
    const config = extensions(['.js'])();
    const result = extensions(['.css'])(config);

    if (typeof result.resolve !== 'object') {
      throw new TypeError('resolve is not an object');
    }

    expect(result.resolve.extensions).toEqual(['.js', '.css']);
  });
});

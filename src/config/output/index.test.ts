import { resolve } from 'path';

import output from './';

describe('webpack partial output', () => {
  it('returns valid output object', () => {
    const result = output({
      path: 'out',
      filename: 'bundle.js',
      libraryTarget: undefined,
      publicPath: '/'
    })();

    if (typeof result.output !== 'object') {
      throw new Error('output is not an object');
    }

    expect(result.output.path).toEqual('out');
    expect(result.output.filename).toEqual('bundle.js');
    expect(result.output.libraryTarget).toEqual(undefined);
    expect(result.output.publicPath).toEqual('/');
  });

  it('resolves context if provided', () => {
    const result = output({
      path: 'out'
    }, {
      context: __dirname
    })();

    if (typeof result.output !== 'object') {
      throw new Error('output is not an object');
    }

    expect(result.output.path).toEqual(resolve(__dirname, 'out'));
  });
});

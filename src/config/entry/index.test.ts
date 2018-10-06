import { resolve } from 'path';

import entry from './';

describe('webpack partial entry', () => {{
  it('returns string when passed entry string', () => {
    const result = entry('name')();

    expect(result.entry).toEqual('name');
  });

  it('returns array when passed entry array', () => {
    const result = entry(['one', 'two'])();

    expect(result.entry).toEqual(['one', 'two']);
  });

  it('returns object of named entries when passed named entries', () => {
    const result = entry({
      name: 'value'
    })();

    if (typeof result.entry === 'undefined') {
      throw new Error('entry is not defined');
    }

    expect(typeof result.entry).toEqual('object');
  });

  it('appends entry to array', () => {
    let config = entry(['one'])();

    let result = entry(['two'], {
      strategy: 'append'
    })(config);

    expect(result.entry).toEqual(['one', 'two']);
  });

  it('resolves context of single entry', () => {
    const result = entry('name', { context: __dirname })();

    expect(result.entry).toEqual(resolve(__dirname, 'name'));
  });

  it('resolves context of array entry', () => {
    const result = entry(['one', 'two'], { context: __dirname })();

    if (!Array.isArray(result.entry)) {
      throw new Error('entry is not an array');
    }

    expect(result.entry.shift()).toEqual(resolve(__dirname, 'one'));
    expect(result.entry.shift()).toEqual(resolve(__dirname, 'two'));
  });

  it('resolves context of array entry', () => {
    const result = entry({ key: 'value' }, { context: __dirname })();

    if (typeof result.entry !== 'object' || Array.isArray(result.entry)) {
      throw new Error('entry is not an object');
    }

    expect(result.entry['key']).toEqual(resolve(__dirname, 'value'));
  });
}});

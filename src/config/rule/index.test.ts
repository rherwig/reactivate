import rule from './';

describe('webpack partial rule', () => {
  it('adds object to rules', () => {
    const result = rule({ test: 'test' })();

    if (typeof result.module !== 'object') {
      throw new TypeError('module is not an object');
    }

    if (!Array.isArray(result.module.rules)) {
      throw new TypeError('rules is not an array');
    }

    expect(result.module.rules.shift()).toEqual({ test: 'test' });
  });
});

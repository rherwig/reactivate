import babel from './babel';

type Rule = {
  use: {
    loader?: string
  }
};

describe('webpack rule babel', () => {
  it('adds babel rule', () => {
    const result = babel()();

    if (typeof result.module !== 'object') {
      throw new TypeError('module is not an object');
    }

    if (!Array.isArray(result.module.rules)) {
      throw new TypeError('rules is not an array');
    }

    const rule = <Rule> result.module.rules.shift();

    expect(rule.use.loader).toEqual(require.resolve('babel-loader'));
  });
});

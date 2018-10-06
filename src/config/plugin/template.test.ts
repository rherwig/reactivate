import * as HtmlPlugin from 'html-webpack-plugin';

import template from './template';

describe('webpack plugin template', () => {
  it('adds html plugin to plugins', () => {
    const result = template({
      template: 'index.html'
    }, {
      context: __dirname
    })();

    if (!Array.isArray(result.plugins)) {
      throw new TypeError('plugins is not an array');
    }

    expect(result.plugins.shift() instanceof HtmlPlugin).toBe(true);
  });
});

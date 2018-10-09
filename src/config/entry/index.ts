import * as merge from 'webpack-merge';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { MergeStrategy } from 'webpack-merge';

import { ReactivateEntry } from '../../types/ReactivateEntry';

type TDefaultOptions = {
  strategy: MergeStrategy,
  context?: string | undefined,
};

type TOptions = {
  strategy?: MergeStrategy,
  context?: string | undefined,
};

const defaultOptions: TDefaultOptions = {
  strategy: 'replace',
};

const addContext = (
  entry: string | string[] | ReactivateEntry,
  context?: string
): string | string[] | ReactivateEntry => {
  if (typeof context !== 'string') {
    return entry;
  }

  if (Array.isArray(entry)) {
    return entry.map(path => resolve(context, path));
  }

  if (typeof entry === 'object') {
    return Object.keys(entry).reduce((result, name) => ({
      ...result,
      [name]: resolve(context, entry[name] as string)
    }), {});
  }

  if (typeof entry === 'string') {
    return resolve(context, entry);
  }

  return entry;
};

export default (
  entry: string | string[] | ReactivateEntry,
  options: TOptions = defaultOptions
) => (config: Configuration = {}): Configuration => {
  const _options: TDefaultOptions = {
    ...defaultOptions,
    ...options,
  };

  const _entry = typeof entry === 'string' ? [entry] : entry;

  return merge.strategy({
    entry: _options.strategy
  })(config, {
    entry: addContext(_entry, _options.context)
  });
};

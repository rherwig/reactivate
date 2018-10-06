import * as merge from 'webpack-merge';
import { resolve } from 'path';
import { Configuration, Entry, EntryFunc } from 'webpack';
import { MergeStrategy } from 'webpack-merge';

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
  entry: string | string[] | Entry | EntryFunc,
  context?: string
): string | string[] | Entry | EntryFunc => {
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
  entry: string | string[] | Entry | EntryFunc,
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

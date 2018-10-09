import { Entry } from 'webpack';

export type ReactivateEntry = Entry & {
  client?: string | string[];
  server?: string | string[];
};

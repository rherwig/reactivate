import { Express } from 'express-serve-static-core';

import Store from './store';

const configureServer = (cb: (app: Express) => void) => {
  const app = Store.getInstance().getServer();

  console.log('===');
  console.log('Fetching server...');
  console.log('===');

  if (!app) {
    throw new TypeError('Express instance is not available.');
  }

  cb(app);
};

export {
  configureServer,
  Store,
};

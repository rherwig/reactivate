#!/usr/bin/env node
import * as program from 'commander';

import configure from './config';
import serve from './scripts/serve';
import build from './scripts/build';

program
  .version('0.1.0', '-v, --version')
  .option('-c, --config <configPath>', 'Configuration file');

program
  .command('serve')
  .action(() => {
    const config = configure(program.config);
    serve(config);
  });

program
  .command('build')
  .option('-p, --production', 'Enable production mode')
  .action((cmd) => {
    const config = configure(program.config);
    build(config, cmd.production);
  });

program.parse(process.argv);

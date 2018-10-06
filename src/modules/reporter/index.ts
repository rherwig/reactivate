import * as ora from 'ora';
import { Compiler } from 'webpack';
import { Tapable } from 'tapable';
import Plugin = Tapable.Plugin;

const name = 'ReactivateReporter';

export default class ReactivateReporter implements Plugin {
  spinner: any;
  isLoading: boolean = false;

  constructor() {
    this.spinner = ora();
    this.spinner.color = 'green';
  }

  apply(compiler: Compiler): void {
    compiler.hooks.beforeRun.tap(name, () => {
      this.spinner.text = 'Preparing...';
      this.spinner.start();
    });

    compiler.hooks.beforeCompile.tap(name, () => {
      this.spinner.text = 'Building...';
    });

    compiler.hooks.done.tap(name, () => {
      this.spinner.succeed('Build succeeded');
      this.spinner.stop();
    });
  }
}

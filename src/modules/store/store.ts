import { Express } from 'express';

var global: any;

export default class Store {
  private server: Express | undefined;

  private static instance: Store;

  public static getInstance(): Store {
    this.instance = this.instance || global.store;

    if (!this.instance) {
      this.instance = new Store();
      global.store = this.instance;
    }

    return this.instance;
  }

  public setServer(server: Express) {
    this.server = server;
  }

  public getServer(): Express | undefined {
    return this.server;
  }
}

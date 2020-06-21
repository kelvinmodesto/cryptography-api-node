import { IDb } from '@interfaces/IDb';

export default class ContextStrategy implements IDb {
  public database: any;
  constructor(database: any) {
    this.database = database;
  }
  public create(item: any = {}) {
    return this.database.create(item);
  }

  public read(item: any = {}) {
    return this.database.read(item);
  }

  public update(id: string, item: any = {}) {
    return this.database.update(id, item);
  }

  public delete(id: string) {
    return this.database.delete(id);
  }

  public isConnected() {
    return this.database.isConnected();
  }

  public connect() {
    return this.database.connect();
  }
}

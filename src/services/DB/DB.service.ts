import Dexie, { TXWithTables } from "dexie";


export class QSmokeDB extends Dexie {
  static schemas = [] as {
    (): any
    schema: {
      schema: string
      tableName: string
    }
  }[];

  constructor() {
    super('q-smoke-db');
    this.version(1).stores(
      QSmokeDB.schemas.reduce(
        (acc, Type)=>{
          acc[Type.schema.tableName] = Type.schema.schema;
          return acc;
        }, 
        {} as Record<string, string>
      )
    );
    QSmokeDB.schemas.forEach((Type)=>{
      this.table(Type.schema.tableName).mapToClass(Type)
    });
  }

  readAndWriteTransaction<R>(tableName: string, transaction: (table: TXWithTables<this>)=>Promise<R>) {
    return this.transaction<R>("rw", tableName, transaction)
  }
}

export const DBService = new QSmokeDB();
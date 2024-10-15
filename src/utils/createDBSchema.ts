export function createDBSchema<TableName extends keyof any>(tableName: TableName, ...columns: string[]) {
  return {
    tableName,
    schema: columns.join(', ')
  }
}
import * as mysql from 'mysql'
import { createTableSql, addOneSql, updateSql, deleteSql } from './config'

export class Mysql {
  connection: any
  constructor(
    database: string = 'db',
    password: string = 'root',
    host: string = 'localhost',
    user: string = 'root'
  ) {
    this.connection = (mysql as any).createConnection({ host, user, password, database })
  }

  sql(sql: string = 'SELECT 1 AS solution', ...params: any[]): Promise<any> {
    return new Promise((resolve: any, reject: any): void => {
      this.connection.query(
        sql,
        ...params,
        function (error: any, results: any, fields: any): void {
          if (error) reject(error)
          resolve(results)
        }
      )
    })
  }

  dropTable(tableName: string): Promise<any> {
    return this.sql(`DROP TABLE ${tableName}`)
  }

  createTable(tableName: string, params: string[]): Promise<any> {
    return this.sql(createTableSql(tableName, params))
  }

  insert(tableName: string, params: { [key: string]: any }): Promise<any> {
    return this.sql(
      addOneSql(tableName, Object.keys(params)),
      Object.values(params)
    )
  }

  update(
    tableName: string,
    setParams: { [key: string]: any },
    whereParams: string = ''
  ) {
    return this.sql(updateSql(tableName, setParams, whereParams))
  }

  del(tableName: string, whereParams: string = '') {
    return this.sql(deleteSql(tableName, whereParams))
  }

  query(sql: string = 'SELECT 1 AS solution'): Promise<any> {
    return this.sql(sql)
  }
}

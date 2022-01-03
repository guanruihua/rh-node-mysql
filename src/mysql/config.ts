export function createTableSql(tableName: string, params: string[]): string {
  return `CREATE TABLE if not exists ${tableName}(${params.join(',')})`
}

export function addOneSql(tableName: string, params: string[]): string {
  return `INSERT INTO ${tableName}(${params.join(',')}) VALUES(${new Array(
    params.length
  )
    .fill('?')
    .join(',')})`
}

export function updateSql(
  tableName: string,
  setParams: { [key: string]: any },
  whereParams: string = ''
): string {
  return `UPDATE ${tableName} SET ${Object.entries(setParams).map(
    ([key, value]: [string, any]) => {
      return `${key} = ${typeof value === 'string' ? `'${value}'` : value} `
    }
  )} 
  ${whereParams.length > 0 ? 'WHERE ' + whereParams : ''}
`
}

export function deleteSql(
  tableName: string,
  whereParams: string = ''
): string {
  return `DELETE ${tableName} ${
    whereParams.length > 0 ? 'WHERE  ' + whereParams : ''
  }`
}

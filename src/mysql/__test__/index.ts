import { Mysql } from '../index'

console.log('--------------')
const db:Mysql = new Mysql('test_db', 'ruihuag')

// db.sql().then((res: any): void => {
//   console.log(res)
// })

db.createTable('test_db', [
  'id int AUTO_INCREMENT',
  'title VARCHAR(255)',
  'url VARCHAR(255)',
  'name VARCHAR(255)',
  'alexa VARCHAR(255)',
  'country VARCHAR(255)',
  'body VARCHAR(255)',
  'PRIMARY KEY(id)'
]).then((res: any): void => {
  console.log(res)
})

// let obj: any = { title: 'test', name: 'ruihuag' }
// Object.entries(obj).map((item) => {
//   console.log({ item })
// })
// console.log(Object.keys(obj), Object.values(obj));
// console.log(new Array(5).fill('?').join(','));
// db.insert('test_db', { title: 'test', name:'ruihuag' }).then((res) => console.log(res))

// db.update('test_db', { title: 'ruihuag224' }, 'id=2').then((res) => console.log(res))

db.sql('select * from test_db where 1=1').then((res) => {
  console.log(res)
})
// console.log(['a', 'b'].join(','))

// 情况一：通过 npm run test --arg=testArg
// 可以在 process.env.npm_config_arg 拿到输入的参数 'testArg'
// 情况二： npm run test --arg
// 则 process.env.npm_config_arg 为 true
// 情况三：npm run test --arg=false
// 则 process.env.npm_config_arg 为 ''
// const { eventBus } = RH

// console.log(process.env.npm_config_test)

// npm run dev --要运行的模块名

let indexes: string[] = ['mysql']

indexes.forEach((name: string): void => {
  // if (process.env[`npm_config_${name}`]) {
  if (process.env.npm_config_test === undefined) {
    import(`../${name}/__test__`)
    return
  }
  if (
    process.env.npm_config_test &&
    process.env.npm_config_test.split(',').includes(name)
  ) {
    import(`../${name}/__test__`)
  }
})

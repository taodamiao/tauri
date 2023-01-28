const { run, killDevApp, logError } = require('./index')

module.exports.run = (args, binName) => {
  return new Promise((resolve, reject) => {
    run(args, binName, res => {
      if (res instanceof Error) {
        reject(res)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports.killDevApp = () => {
  return new Promise((resolve, reject) => {
    killDevApp(res => {
      if (res instanceof Error) {
        reject(res)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports.logError = logError

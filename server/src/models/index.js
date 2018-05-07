const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// 注册sequelize默认行为
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// 读取该目录所有文件,只要不是index.js则是db配置文件,把它们全部注册到sequelize
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    // console.log(`model.name: ${model.name}`)
    // 将db注册为Object{Song:'Song'}....., 如d['a']===d.a => true
    db[model.name] = model
  })

// 数据库关联,将关联数据库传到含associate的models中
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

// 将sequelize分别传给上面读取到的db里面sequelize的变量
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

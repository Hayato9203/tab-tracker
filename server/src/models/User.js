const Promise = require('bluebird')
// 官方文档http://bluebirdjs.com/docs/api/promise.promisifyall.html
// bcrypt模块将全程包含Promise，即含有then(),then会忽略err,直接返回有效的值
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  // 如果密码没改变的话，就不用加密
  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  // define名为User的Schema： http://sequelize.readthedocs.io/en/2.0/docs/models-definition/
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      trim: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
/*
`遇到的问题：bcrypt.compareAsync不起作用一直返回false, 猜想
  1.compare方式有问题，参照文档和stackflow无果
  2.bcrypt.hash，无果
  3.sequelize.define
  4.hooks
`
*/

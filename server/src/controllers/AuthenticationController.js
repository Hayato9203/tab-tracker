const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      // console.log(user)
      // console.log(user.dataValues)
      res.send(user.dataValues)
    } catch (err) {
      res.status(400).send({
        error: `This email account is already is use.`
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: `The login information was incorrect`
        })
      }
      // 将用户的password与数据库的password对比返回
      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: `The login information was incorrect`
        })
      }
      // console.log(user)
      // console.log(user.dataValues)
      res.send({
        user: user.dataValues
      })
    } catch (err) {
      // 返回500状态码告诉用户非他们的原因
      res.status(500).send({
        error: `An error has occured trying to log in.`
      })
    }
  }
}

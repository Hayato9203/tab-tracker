const AuthenticationController = require('./controllers/AuthenticationController')

// 用作于检查body的中间件
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.get('/songs',
    SongsController.index)
  app.post('/songs',
    SongsController.post)
  app.get('/songs/:songId',
    SongsController.show)
}

const passport = require('passport')

// jwt从../passport.js中传来的JwtStrategy
module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err) {
      res.status(400).send({
        error: `you do not have acces to this resource`
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}

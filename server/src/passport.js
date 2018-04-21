const passport = require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt')
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret
  }, async function (jwtPayload, done) {
    try {
      // AuthenticationController.js中已经sign了一个user，将包含一个id
      const user = await User.findOne({
        where: {id: jwtPayload.id}
      })
      if (!user) {
        return done(new Error(), false)
      }
      return done(null, user)
    } catch (err) {
      return done(new Error(), false)
    }
  })
)

module.exports = passport

const { History, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      const histories = await History.findAll({
        where: { UserId: userId },
        include: [{ model: Song }]
      })
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to fetch the history`
      })
    }
  },
  async post (req, res) {
    try {
      // 创建bookmark前判断数据库中是否已存在
      const {userId, songId} = req.body.params
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to create the history object`
      })
    }
  }
}

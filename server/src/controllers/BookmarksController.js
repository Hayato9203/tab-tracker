const { Bookmark, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      // const where = songId ? {UserId: userId} : {UserId: userId, SongId: songId}
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      // Song的信息将会内嵌于返回的bookmark中
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [{model: Song}]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({
          bookmarkId: bookmark.id
        }, bookmark.Song))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to fetch the bookmark`
      })
    }
  },
  async post (req, res) {
    try {
      // 创建bookmark前判断数据库中是否已存在
      const {userId, songId} = req.body.params
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      // console.log(`userId`, userId, songId, req.body.params)
      // 如果存在，则返回400
      if (bookmark) {
        return res.status(400).send({
          error: `you already have this set as a bookmark`
        })
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to create the bookmark`
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      // .then(async (bookmark) => {
      await bookmark.destroy()
      res.send(bookmark)
      // })
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to delete the bookmark`
      })
    }
  }
}

/* 遇到的问题， BookmarksService中传来一个body含params的Object{songId:,userId:},通过打印查看得出正确的Bookmark.create(req.body)逻辑 */

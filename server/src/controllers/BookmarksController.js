const { Bookmark, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      // 从jwt中获得userId
      const userId = req.user.id
      const {songId} = req.query
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
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to fetch the bookmark`
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      // 创建bookmark前判断数据库中是否已存在
      const {songId} = req.body.params
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
      // 只返回已经在jwt的用户的bookmarks
      const userId = req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: `you do not have access to this bookmark`
        })
      }
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

/* 遇到的问题， BookmarksService中传来一个body含params的Object{songId:,userId:},通过打印查看得出正确的Bookmark.create(req.body)逻辑
  使用jwt后，添加bookmark功能失效，数据库只保存了songId,无userId
  1.并不能使用jwt获得的userId，验证可以获得
  2.post方法不能获得userId,改正为jwt途径获得,修复问题
*/

const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to fetch the bookmark`
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body
      await Bookmark.create(bookmark)
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to create the bookmark`
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      await Bookmark.findById(bookmarkId)
        .then(async (bookmark) => {
          await bookmark.destroy()
          res.send(bookmark)
        })
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to delete the bookmark`
      })
    }
  }
}

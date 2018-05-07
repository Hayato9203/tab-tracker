module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', { })

  // models从引入的js中传过来
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  }

  return Bookmark
}

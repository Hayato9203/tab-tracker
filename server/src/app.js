const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
// 使用morgan监听http请求和记录浏览器信息
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: `Hello World!`
  })
})

require('./passport')

require('./routes')(app)

// force: true服务重启,数据库将被覆盖
sequelize.sync({
  force: false
}).then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})

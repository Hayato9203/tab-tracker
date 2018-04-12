const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

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

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered, Have fun!`
  })
})

app.listen(process.env.PORT || 8081)

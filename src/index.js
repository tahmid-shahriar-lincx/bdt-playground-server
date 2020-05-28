const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')

const { availF, getEvalF } = require('./helperFunctions')
const exeTree = require('./bdt')
const app = express()

dotenv.config({
  path: path.resolve('./.env.example')
})

app.set('port', process.env.PORT || 3000)

app.use(
  cors(),
  morgan(':method :url :status :res[content-length] - :response-time ms'),
  helmet(),
  bodyParser.json({ limit: '1mb' })
)

const server = app.listen(app.get('port'), () => {
  console.log('express server listening on port ' + server.address().port)
})

app.get('/', (req, res) => {
  res.status(200).send('Hi You Reached the API, now REST!')
})

app.get('/labels', (req, res) => {
  const labels = availF.map(e => e.label)
  res.status(200).send(labels)
})

app.post('/result', async (req, res) => {
  const jsonStr = req.body.conf.replace(/\t/g, '')
  const jsonStr2 = jsonStr.replace(/\n/g, '')
  const parsedJson = JSON.parse(jsonStr2)
  const result = exeTree(parsedJson)
  console.log(result)
  res.status(200).json({ result })
})

module.exports = server

import express from 'express'
import handlebars from 'express-handlebars'
import './services/connection'
import bodyParser from 'body-parser'
import routes from './routes'

const server = express()

server.use(bodyParser.urlencoded({ extended: false }))

server.use(express.json())
server.use(express.static('public'))

server.engine('handlebars', handlebars({ defaultLayout: 'main' }))
server.set('view engine', 'handlebars')

server.use(routes)

server.listen(3333, () => {
  console.log('port 3333')
})

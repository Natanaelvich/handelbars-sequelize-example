import express from 'express'
import PostController from './controllers/PostController'

const routes = express.Router()

routes.get('/', PostController.index)

routes.get('/register-post', (req, res) => {
  res.render('home')
})
routes.post('/register-post/create', PostController.store)

export default routes

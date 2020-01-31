import Sequelize from 'sequelize'
import Post from '../models/Post'

// connect to database
const sequelize = new Sequelize('youtube_course', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamp: false,
  },
})

Post.init(sequelize)

try {
  sequelize.authenticate()
  console.log('Connected to mysql')
} catch (error) {
  console.log('error connecting :' + error)
}

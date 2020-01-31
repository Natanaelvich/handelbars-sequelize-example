import Post from '../models/Post'
import sequelize from 'sequelize'

export default {
  async index(req, res) {
    const post = await Post.findAll({
      attributes: [
        'id',
        'title',
        'description',
        [
          sequelize.fn(
            'date_format',
            sequelize.col('createdAt'),
            '%I:%s %d/%m/%y '
          ),
          'createdAt',
        ],
      ],
    })

    res.render('list', { post })
  },

  async store(req, res) {
    const { title, description } = req.body

    const post = await Post.create({
      title,
      description,
    })

    if (!post) {
      return res.status(401).json({ error: 'impossible to create post' })
    }

    return res.redirect('/')
  },
}

import Post from '../models/Post'

export default {
  async index(req, res) {
    const post = await Post.findAll({
      attributes: ['id', 'title', 'description'],
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

    return res.json(post)
  },
}

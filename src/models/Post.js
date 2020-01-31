import { Model, DataTypes } from 'sequelize'

class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
      }
    )
  }
}

export default Post

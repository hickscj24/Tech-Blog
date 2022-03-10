const { Model, DataTypes} = require('sequilize');
const sequelize = require('../config/config.js');

class Comment extends Model {}

Comment.init (
    { 
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          comment: {
            type: DataTypes.STRING,
            allowNull: false
          }

},
{
    sequelize
}
);

module.exports = Comment;
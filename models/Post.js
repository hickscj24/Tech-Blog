// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/config');

// Initialize Product model (table) by extending off Sequelize's Model class
class Post extends Model {}

// set up fields and rules for Product model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    body: { 
      type:DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: "TIMESTAMP", 
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true
    },
    author_name: {
      type: DataTypes.STRING,
      references: { 
        model: 'user',
        key: 'name'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;

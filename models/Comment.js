const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: "TIMESTAMP",
            allowNull: false
        },
        author_name: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'name'
            }
        },
        post_id: {
           type: DataTypes.INTEGER.UNSIGNED,
           references: {
               model: "post",
               key: "id"
           }
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
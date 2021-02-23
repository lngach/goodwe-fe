const sequelize = require('../utils/provider')
const Sequelize = require('sequelize')

const News = sequelize.define(
  'news',
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    slug: {
      type: Sequelize.STRING,
      unique: true,
    },
    image: Sequelize.STRING,
    views: Sequelize.INTEGER,
    content: Sequelize.TEXT,
    isActive: {
      type: Sequelize.BOOLEAN,
      field: 'is_active',
    },
    createdAt: {
      type: Sequelize.DATE(6),
      field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DATE(6),
      field: 'updated_at',
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        name: 'news_pk_index',
        fields: ['id'],
      },
    ],
  }
)

module.exports = News

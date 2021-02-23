const express = require('express')
const router = express.Router()
const News = require('../../models/news')
const paginate = require('../../config/config.paginate')

router.get('/', async (req, res) => {
    try {
        const news = await News.findAndCountAll({
          ...paginate(req),
          order: [
            ['updated_at', 'DESC'],
          ],
          where: { isActive: true },
        })

        meta = { 
            ...paginate(req),
            total: news.count,
            path: req.originalUrl
        }

        res.render('user/news', { 
          title: "Tin tức" ,
          news: news.rows,
          meta,
        })
      } catch (error) {
        res.render('user/news', {
          title: 'Tin Tức',
          main: null,
          news: [],
          meta: null,
        })
      }
  })


  module.exports = router
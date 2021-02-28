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

router.get('/:slug', async (req, res) => {
  try {
    const slug = req.params.slug
    const _new = await News.findOne({ where: { slug: slug } })
    res.render('user/news-deltail', { title: _new.title, _new: _new })
  } catch (error) {
    res.render('user/news-deltail', { title: 'Chi tiết sản phẩm', _new: null })
  }
})

module.exports = router
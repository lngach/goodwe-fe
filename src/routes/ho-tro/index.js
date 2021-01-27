const express = require('express')
const router = express.Router()

router.get('/bao-hanh', (_, res) => {
  res.render('ho-tro/bao-hanh', { title: 'Chính sách bảo hành có giới hạn của Goodwe' })
})

router.get('/cau-hoi-thuong-gap', (_, res) => {
  res.render('ho-tro/cau-hoi-thuong-gap', { title: 'Goodwe câu hỏi thường gặp' })
})

router.get('/cau-hoi-thuong-gap', (_, res) => {
  res.render('ho-tro/video', { title: 'Goodwe Video' })
})
module.exports = router
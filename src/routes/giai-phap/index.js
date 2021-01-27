const express = require('express')
const router = express.Router()

router.get('/khu-dan-cu', (_, res) => {
  res.render('giai-phap/khu-dan-cu', { title: 'Giải pháp dân cư trực tuyến Goodwe' })
})

router.get('/luu-tru-nang-luong', (_, res) => {
  res.render('giai-phap/luu-tru-nang-luong', { title: 'Giải pháp lưu trữ năng lượng Goodwe' })
})

router.get('/thuong-mai', (_, res) => {
  res.render('giai-phap/thuong-mai', { title: 'Giải pháp tiện ích và thương mại Goodwe' })
})

router.get('/gioi-han-cong-suat', (_, res) => {
  res.render('giai-phap/gioi-han-cong-suat', { title: 'Giải pháp giới hạn nguồn điện của Goodwe' })
})

module.exports = router
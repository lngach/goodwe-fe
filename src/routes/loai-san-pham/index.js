const express = require('express')
const router = express.Router()

router.get('/san-pham', (_, res) => {
  res.render('loai-san-pham/index', { title: 'Hệ thống giám sát và biến tần Goodwe' })
})

router.get('/bien-tan-dan-dung', (_, res) => {
  res.render('loai-san-pham/bien-tan-dan-dung', { title: 'Biến tần dân dụng' })
})

router.get('/bien-tan-thuong-mai', (_, res) => {
  res.render('loai-san-pham/bien-tan-thuong-mai', { title: 'Biến tần thương mại' })
})

router.get('/bien-tan-cong-suat-lon', (_, res) => {
  res.render('loai-san-pham/bien-tan-cong-suat-lon', { title: 'Biến tần công suất lớn' })
})

router.get('/bien-tan-luu-tru', (_, res) => {
  res.render('loai-san-pham/bien-tan-luu-tru', { title: 'Biến tần lưu trữ' })
})

router.get('/he-thong-giam-sat', (_, res) => {
  res.render('loai-san-pham/he-thong-giam-sat', { title: 'Hệ thống giám sát' })
})

module.exports = router
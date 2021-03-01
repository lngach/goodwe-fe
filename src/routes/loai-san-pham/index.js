const express = require('express')
const Product_type = require('../../models/product_type')
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

router.get('/san-pham/san-pham-khac', async (req, res) => {
  try {
    const product_type = await Product_type.findAll();
    res.render('loai-san-pham/chi-tiet-san-pham', { title: product_type.title, product_type: product_type })
  } catch (error) {
    res.render('loai-san-pham/chi-tiet-san-pham', { title: 'San pham khac', product_type: null })
  }
})

module.exports = router
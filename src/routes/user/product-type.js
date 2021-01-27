const express = require('express')
const router = express.Router()

router.get('/bien-tan-dan-dung', (_, res) => {
  res.render('user/bien-tan-dan-dung')
})

router.get('/bien-tan-thuong-mai', (_, res) => {
  res.render('user/bien-tan-thuong-mai')
})

router.get('/bien-tan-cong-suat-lon', (_, res) => {
  res.render('user/bien-tan-cong-suat-lon')
})

router.get('/bien-tan-luu-tru', (_, res) => {
  res.render('user/bien-tan-luu-tru')
})

router.get('/he-thong-giam-sat', (_, res) => {
  res.render('user/he-thong-giam-sat')
})
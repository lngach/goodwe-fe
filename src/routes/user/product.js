const express = require('express')
const router = express.Router()

// Start Bien tan dan dung
router.get('/bien-tan-dan-dung/dong-xs', (_, res) => {
  res.render('bien-tan-dan-dung/dong-xs', { title: 'Dòng XS' })
})

router.get('/bien-tan-dan-dung/dong-ns', (_, res) => {
  res.render('bien-tan-dan-dung/dong-ns', { title: 'Dòng NS' })
})

router.get('/bien-tan-dan-dung/dong-dns', (_, res) => {
  res.render('bien-tan-dan-dung/dong-dns', { title: 'Dòng DNS' })
})

router.get('/bien-tan-dan-dung/dong-ms', (_, res) => {
  res.render('bien-tan-dan-dung/dong-ms', { title: 'Dòng MS' })
})

router.get('/bien-tan-dan-dung/dong-sdt-g2', (_, res) => {
  res.render('bien-tan-dan-dung/dong-sdt-g2', { title: 'Dòng SDT G2' })
})
// End Bien tan dan dung //

// ====================================================== //

// Start Bien tan thuong mai
router.get('/bien-tan-thuong-mai/dong-smt', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-smt', { title: 'Dòng SMT' })
})

router.get('/bien-tan-thuong-mai/dong-mt', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-mt', { title: 'Dòng MT' })
})

router.get('/bien-tan-thuong-mai/dong-ht', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-ht', { title: 'Dòng HT' })
})
// End Bien tan thuong mai //

// ====================================================== //

// Start Bien tan cong suat lon
router.get('/bien-tan-cong-suat-lon/dong-ht', (_, res) => {
  res.render('bien-tan-cong-suat-lon/dong-ht', { title: 'Dòng HT' })
})
// End Bien tan cong suat lon //


// ====================================================== //

// Start Bien tan luu tru
router.get('/bien-tan-luu-tru/dong-et', (_, res) => {
  res.render('bien-tan-luu-tru/dong-et', { title: 'Dòng ET' })
})

router.get('/bien-tan-luu-tru/dong-eh', (_, res) => {
  res.render('bien-tan-luu-tru/dong-eh', { title: 'Dòng EH' })
})

router.get('/bien-tan-luu-tru/dong-esa', (_, res) => {
  res.render('bien-tan-luu-tru/dong-esa', { title: 'Dòng ESA' })
})

router.get('/bien-tan-luu-tru/dong-es', (_, res) => {
  res.render('bien-tan-luu-tru/dong-es', { title: 'Dòng ES' })
})

router.get('/bien-tan-luu-tru/dong-em', (_, res) => {
  res.render('bien-tan-luu-tru/dong-em', { title: 'Dòng EM' })
})
// End Bien tan luu tru //

// ====================================================== //

// Start He thong giam sat //
router.get('/he-thong-giam-sat/he-thong-quan-ly-nang-luong-thong-minh', (_, res) => {
  res.render('he-thong-giam-sat/he-thong-quan-ly-nang-luong-thong-minh', { title: 'Hệ thống quản lý năng lượng thông minh' })
})

router.get('/he-thong-giam-sat/bo-do-dem-thong-minh', (_, res) => {
  res.render('he-thong-giam-sat/bo-do-dem-thong-minh', { title: 'Bộ đo đếm thông minh' })
})

router.get('/he-thong-giam-sat/wi-fi-module', (_, res) => {
  res.render('he-thong-giam-sat/wi-fi-module', { title: 'Wi-Fi Module' })
})

router.get('/he-thong-giam-sat/kiem-soat-nang-luong-thong-minh', (_, res) => {
  res.render('he-thong-giam-sat/kiem-soat-nang-luong-thong-minh', { title: 'Kiểm soát năng lượng thông minh' })
})

router.get('/he-thong-giam-sat/hop-truyen-thong-diem-mat-troi', (_, res) => {
  res.render('he-thong-giam-sat/hop-truyen-thong-diem-mat-troi', { title: 'Hộp truyền thông năng lượng mặt trời - Hộp truyền thông thông minh' })
})

router.get('/he-thong-giam-sat/ezlogger-pro', (_, res) => {
  res.render('he-thong-giam-sat/ezlogger-pro', { title: 'EzzLogger Pro' })
})
// End He thong giam sat //
const express = require('express')
const router = express.Router()

// Start Bien tan dan dung
router.get('/bien-tan-dan-dung', (_, res) => {
  res.render('bien-tan-dan-dung/index', { title: 'Biến tần dân dụng' })
})

router.get('/bien-tan-dan-dung/dong-xs', (_, res) => {
  res.render('bien-tan-dan-dung/dong-xs', { title: 'Dòng XS' })
})

router.get('/bien-tan-dan-dung/dong-ns', (_, res) => {
  res.render('bien-tan-dan-dung/dong-ns', { title: 'Dòng NS' })
})

router.get('/bien-tan-dan-dung/dong-sdt', (_, res) => {
  res.render('bien-tan-dan-dung/dong-sdt', { title: 'Dòng SDT' })
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

router.get('/bien-tan-dan-dung/dong-ams', (_, res) => {
  res.render('bien-tan-dan-dung/dong-ams', { title: 'Dòng A-MS' })
})

router.get('/bien-tan-dan-dung/dong-ms', (_, res) => {
  res.render('bien-tan-dan-dung/dong-ms', { title: 'Dòng MS' })
})
// End Bien tan dan dung //

// ====================================================== //

// Start Bien tan thuong mai
router.get('/bien-tan-thuong-mai', (_, res) => {
  res.render('bien-tan-thuong-mai/index', { title: 'Biến tần thương mại' })
})

router.get('/bien-tan-thuong-mai/dong-sdt', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-sdt', { title: 'Dòng SDT' })
})

router.get('/bien-tan-thuong-mai/dong-lvsmt', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-lvsmt', { title: 'Dòng LVSMT' })
})

router.get('/bien-tan-thuong-mai/dong-lvdt', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-lvdt', { title: 'Dòng LVDT' })
})

router.get('/bien-tan-thuong-mai/dong-sdt-g2', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-sdt-g2', { title: 'Dòng SDT-G2' })
})

router.get('/bien-tan-thuong-mai/dong-smt', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-smt', { title: 'Dòng SMT' })
})

router.get('/bien-tan-thuong-mai/dong-lvmt', (_, res) => {
  res.render('bien-tan-thuong-mai/dong-lvmt', { title: 'Dòng LVMT' })
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
router.get('/bien-tan-cong-suat-lon', (_, res) => {
  res.render('bien-tan-cong-suat-lon/index', { title: 'Biến tần công suất lớn' })
})

router.get('/bien-tan-cong-suat-lon/dong-ht', (_, res) => {
  res.render('bien-tan-cong-suat-lon/dong-ht', { title: 'Dòng HT' })
})
// End Bien tan cong suat lon //


// ====================================================== //

// Start Bien tan luu tru
router.get('/bien-tan-luu-tru', (_, res) => {
  res.render('bien-tan-luu-tru/index', { title: 'Biến tầng lưu trữ' })
})

router.get('/bien-tan-luu-tru/dong-et', (_, res) => {
  res.render('bien-tan-luu-tru/dong-et', { title: 'Dòng ET' })
})

router.get('/bien-tan-luu-tru/dong-bt', (_, res) => {
  res.render('bien-tan-luu-tru/dong-bt', { title: 'Dòng BT' })
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

router.get('/bien-tan-luu-tru/dong-aes', (_, res) => {
  res.render('bien-tan-luu-tru/dong-aes', { title: 'Dòng A-ES' })
})

router.get('/bien-tan-luu-tru/dong-ehb', (_, res) => {
  res.render('bien-tan-luu-tru/dong-ehb', { title: 'Dòng E-HB' })
})
// End Bien tan luu tru //

// ====================================================== //

// Start He thong giam sat //
router.get('/he-thong-giam-sat', (_, res) => {
  res.render('he-thong-giam-sat/index', { title: 'Hệ thống giám sát' })
})

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

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/quan-ly-chat-luong', (_, res) => {
    res.render('ve-chung-toi/quan-ly-chat-luong', { title: 'Kiểm soát chất lượng' })
})

router.get('/du-an', (_, res) => {
    res.render('ve-chung-toi/du-an', { title: 'Dự án HDTSolar VN trên toàn cầu' })
})

// router.get('/tin-tuc', (_, res) => {
//     res.render('ve-chung-toi/tin-tuc', { title: 'Tin tức mới nhất từ HDTSolar VN' })
// })

router.get('/su-nghiep', (_, res) => {
    res.render('ve-chung-toi/su-nghiep', { title: 'Sự nghiệp HDTSolar VN' })
})

router.get('/tin-tuc-chi-tiet', (_, res) => {
    res.render('ve-chung-toi/tin-tuc-chi-tiet', { title: 'Tin tuc chi tiet' })
})

router.get('/du-an-chi-tiet', (_, res) => {
    res.render('ve-chung-toi/du-an-chi-tiet', { title: 'Du an chi tiet' })
})

router.get('/chi-tiet-san-pham', (_, res) => {
    res.render('ve-chung-toi/chi-tiet-san-pham', {title: "Chi tiet san pham"})
  })

module.exports = router
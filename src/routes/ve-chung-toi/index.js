const express = require('express')
const router = express.Router()

router.get('/quan-ly-chat-luong', (_, res) => {
    res.render('ve-chung-toi/quan-ly-chat-luong', { title: 'Kiểm soát chất lượng' })
})

router.get('/du-an', (_, res) => {
    res.render('ve-chung-toi/du-an', { title: 'Dự án Goodwe trên toàn cầu' })
})

router.get('/tin-tuc', (_, res) => {
    res.render('ve-chung-toi/tin-tuc', { title: 'Tin tức mới nhất từ Goodwe' })
})

router.get('/su-nghiep', (_, res) => {
    res.render('ve-chung-toi/su-nghiep', { title: 'Sự nghiệp Goodwe' })
})

module.exports = router
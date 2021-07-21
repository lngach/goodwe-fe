const express = require('express')
const router = express.Router()
const Product = require('../../models/product')
const Category = require('../../models/category')
const ProductType = require('../../models/product_type')
const Provider = require('../../models/provider')

router.get('/', async (_, res) => {
  try {
    const inverters = await Product.findAll({
      limit: 3,
      order: [['updated_at', 'DESC']],
      include: [
        Provider,
        ProductType,
        {
          model: Category,
          as: 'categories',
          where: { id: '4598e8d0-8910-4f3e-9f60-4b82f8ee44c8', isActive: true },
        },
      ],
      where: { isActive: true },
    })
  
    const solarPins = await Product.findAll({
      limit: 3,
      order: [['updated_at', 'DESC']],
      include: [
        Provider,
        ProductType,
        {
          model: Category,
          as: 'categories',
          where: { id: 'be85083f-2f06-44c6-84f0-b0cb558f8a0a', isActive: true },
        },
      ],
      where: { isActive: true },
    })
  
    const solarFans = await Product.findAll({
      limit: 3,
      order: [['updated_at', 'DESC']],
      include: [
        Provider,
        ProductType,
        {
          model: Category,
          as: 'categories',
          where: { id: '49fd9655-3ca6-41f4-b3a3-69e0322efbee', isActive: true },
        },
      ],
      where: { isActive: true },
    })
  
    const solarLeds = await Product.findAll({
      limit: 3,
      order: [['updated_at', 'DESC']],
      include: [
        Provider,
        ProductType,
        {
          model: Category,
          as: 'categories',
          where: { id: 'e1a50672-d385-48a0-a669-8efc70952804', isActive: true },
        },
      ],
      where: { isActive: true },
    })
  
    const solarCameras = await Product.findAll({
      limit: 3,
      order: [['updated_at', 'DESC']],
      include: [
        Provider,
        ProductType,
        {
          model: Category,
          as: 'categories',
          where: { id: '8aeb8481-c4e9-44a7-bf53-bdb01c7f6aa9', isActive: true },
        },
      ],
      where: { isActive: true },
    })
  
    res.render('user/index', { title: 'Trang Chủ - Goodwe VN', inverters, solarPins, solarFans, solarLeds, solarCameras })
  } catch (error) {
    res.render('user/index', {
      title: 'Trang Chủ - Goodwe VN',
      inverters: [],
      solarPins: [],
      solarFans: [],
      solarLeds: [],
      solarCameras: [],
    })
  }
  
})

router.get('/lien-he', (_, res) => {
  res.render('user/contact', {
    title: 'Liên Hệ - Goodwe VN',
  })
})


module.exports = router

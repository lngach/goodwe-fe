const express = require('express')
const router = express.Router()

router.get('/inverter', (_, res) => {
  res.render('user/inverter')
})

router.get('/pin-mat-troi', (_, res) => {
  res.render('user/pin-mat-troi')
})
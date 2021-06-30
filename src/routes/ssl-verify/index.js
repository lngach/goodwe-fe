const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/.well-known/pki-validation/BD551E1407E3D4A83B691D3102413886.txt', (_, res) => {
  res.sendFile(path.resolve('BD551E1407E3D4A83B691D3102413886.txt'))
})

module.exports = router
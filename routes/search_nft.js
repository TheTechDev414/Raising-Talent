const express = require('express')
const router = express.Router()
const Product = require('../models/product')


// Getting One
router.get('/:name', getProductByName, (req, res) => {
  res.json(res.product)
})

async function getProductByName(req, res, next) {
  let product
  try {
    product = await Product.find({ name: req.params.name })
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.product = product
  next()
}

module.exports = router
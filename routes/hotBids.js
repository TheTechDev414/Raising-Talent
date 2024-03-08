const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({likes: "descending"});
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
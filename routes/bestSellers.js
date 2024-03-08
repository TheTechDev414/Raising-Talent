const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({likes: "descending"});
    var query = []
    products.forEach(element => {
        query.push(element.user)
    });
    res.json(query)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
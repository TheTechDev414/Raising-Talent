const express = require('express')
const router = express.Router()
const favourite = require('../models/favourite')
const product = require('../models/product')


router.get('/', async (req, res) => {
  try {
    const favourites = await favourite.find()
    res.json(favourites)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getFavourite, (req, res) => {
  res.json(res.favourites)
})

// Creating one
router.post('/', async (req, res) => {
  const favourites = new favourite({
    pid: req.body.pid,
    product: req.body.product,      
    user: req.body.user,
  })
  try {
    const filterFavourites = await favourite.find({ pid: req.body.pid })
    const filterProduct = await product.findById(req.body.pid)
    filterProduct.likes = filterFavourites.length + 1
    const newFavourites = await favourites.save()
    const updatedFavourite = await filterProduct.save()
    res.status(201).json(updatedFavourite)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getFavourite, async (req, res) => {
  if (req.body.pid != null) {
    res.product.pid = req.body.pid
  }
  if (req.body.product != null) {
    res.product.product = req.body.product
  }
  if (req.body.user != null) {
    res.product.user = req.body.user
  }

  try {
    const updatedFavourite = await res.favourite.save()
    res.json(updatedFavourite)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getFavourite, async (req, res) => {
  try {
    await res.favourites.remove()
    res.json({ message: 'Deleted Favourite' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getFavourite(req, res, next) {
  let favourites
  try {
    favourites = await favourite.findById(req.params.id)
    if (favourites == null) {
      return res.status(404).json({ message: 'Cannot find favourite' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.favourites = favourites
  next()
}

module.exports = router
const express = require('express')
const router = express.Router()
const User = require('../models/user')


// Getting One
router.get('/:username', getUserByName, (req, res) => {
  res.json(res.user)
})

async function getUserByName(req, res, next) {
  let user
  try {
    user = await User.find({ username: req.params.username })
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find product' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

module.exports = router
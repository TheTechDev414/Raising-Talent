const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', async (req, res) => {
  try {
    const user = await User.find()
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

// Creating one
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    bio: req.body.bio,      
    email: req.body.email,
    profile_url: req.body.profile_url,
    profile_banner: req.body.profile_banner,
    balance: req.body.balance,
    wallet_address: req.body.wallet_address,
    link: req.body.link
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.username != null) {
    res.user.username = req.body.username
  }
  if (req.body.bio != null) {
    res.user.bio = req.body.bio
  }
  if (req.body.email != null) {
    res.user.email = req.body.email
  }
  if (req.body.profile_url != null) {
    res.user.profile_url = req.body.profile_url
  }
  if (req.body.profile_banner != null) {
    res.user.profile_banner = req.body.profile_banner
  }
  if (req.body.balance != null) {
    res.user.balance = req.body.balance
  }
  if (req.body.wallet_address != null) {
    res.user.wallet_address = req.body.wallet_address
  }
  if (req.body.link != null) {
    res.user.link = req.body.link
  }
  
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted User' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

module.exports = router
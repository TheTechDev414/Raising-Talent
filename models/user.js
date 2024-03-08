const { Schema, Decimal128 } = require('mongoose')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profile_url: {
    type: String,
    required: true
  },
  profile_banner: {
    type: String,
    required: true
  },
  balance: {
    type: Decimal128,
    required: true
  },
  wallet_address: {
    type: String,
    required: true
  },
  link: [
      {type: String} 
  ],
})

module.exports = mongoose.model('User', userSchema)
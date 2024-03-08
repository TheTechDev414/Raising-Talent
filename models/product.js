const { SchemaType, Decimal128, Schema } = require('mongoose')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  price: {
    type: Decimal128,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  user: {
    id:{
      type: String,
      required: true
    }, 
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
   },
})

module.exports = mongoose.model('Product', productSchema)
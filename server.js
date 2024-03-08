require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://afnan:123@cluster0.pqz5j.mongodb.net/risingtalent?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const searchProductRouter = require('./routes/search_nft')
app.use('/searchNfts', searchProductRouter)

const searchUserRouter = require('./routes/search_users')
app.use('/searchUsers', searchUserRouter)

const hotBidsRouter = require('./routes/hotBids')
app.use('/hotBids', hotBidsRouter)

const bestSellersRouter = require('./routes/bestSellers')
app.use('/topSellers', bestSellersRouter)

const favouriteRouter = require('./routes/favourites')
app.use('/favourites', favouriteRouter)

app.listen(3000, () => console.log('Server Started'))
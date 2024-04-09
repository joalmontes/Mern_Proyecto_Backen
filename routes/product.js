const express = require ('express')
const upload = require ('../libs/storage')
const { addProduct } = require('../controllers/productControllers')

const api = express.Router()

api.post('/products', upload.single('image'), addProduct)

module.exports = api
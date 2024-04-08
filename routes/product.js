const express = require ('express')
const { addProduct } = require('../controllers/productControllers')

const api = express.Router()

api.post('/products', addProduct)

module.exports = api
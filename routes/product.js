const express = require ('express')
const upload = require ('../libs/storage')
const { addProduct, getProducts } = require('../controllers/productControllers')
const { addFuncionario,getFuncionario } = require('../controllers/productControllers')

const api = express.Router()

api.post('/products', upload.single('image'), addProduct)
api.post('/funcionario', addFuncionario)

api.get('/products', getProducts)
api.get('/funcionario', getFuncionario)

module.exports = api
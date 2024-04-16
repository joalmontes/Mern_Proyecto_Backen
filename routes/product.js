const express = require ('express')
const upload = require ('../libs/storage')
const { addProduct, getProducts, deleteProduct } = require('../controllers/productControllers')
const { addFuncionario, getFuncionario } = require('../controllers/productControllers')
const { addHistorial, getHistorial } = require('../controllers/productControllers')
const { addAparato, getAparato } = require('../controllers/productControllers')


const api = express.Router()

api.post('/products', upload.single('image'), addProduct)
api.post('/funcionario', addFuncionario)
api.post('/historial', addHistorial)
api.post('/aparato', addAparato)

api.delete('/products/:id', deleteProduct)

api.get('/products', getProducts)
api.get('/funcionario', getFuncionario)
api.get('/historial', getHistorial)
api.get('/aparato', getAparato)

module.exports = api
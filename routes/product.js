const express = require ('express')
const api = express.Router()

api.post('/product', (req, res)  => res.status(201).send({success: true}))

module.exports = api
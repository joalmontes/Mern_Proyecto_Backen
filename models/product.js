const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const productSchema = Schema({
    nombre_funcionario: String,
    aparato: String,
    numero: Number,
    lugar_donde: String,
    fecha_entrega: Date,
}, {
    timestamps: true
})



module.exports = mongoose.model('products', productSchema)
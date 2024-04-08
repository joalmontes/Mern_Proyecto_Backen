const mongoose = require('mongoose')

const Schema = mongoose.schema

const productSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    img: String,
    descripcion: String
},{
    timestamps: true
})

module.exports = mongoose.model('products', productSchema)


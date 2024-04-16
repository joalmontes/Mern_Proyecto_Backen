const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const historialSchema = Schema({
    
    aparato: String,
    mes: String,
    anno: Number

}, {
    timestamps: true
})



module.exports = mongoose.model('historial', historialSchema)
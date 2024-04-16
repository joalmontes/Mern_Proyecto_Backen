const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const AparatoSchema = Schema({
    
    dispositivo: String,
    modelo: String,

}, {
    timestamps: true
})



module.exports = mongoose.model('aparato', AparatoSchema)
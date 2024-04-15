const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const funcionarioSchema = Schema({
    nombre_Apellido: String,
    cargo: String
})



module.exports = mongoose.model('funcionarios', funcionarioSchema)
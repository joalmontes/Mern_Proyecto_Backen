const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const funcionarioSchema = Schema({
    nombre_Apellido: String,
    cargo: String,
    correo: String
},{
    timestamps: true
})


module.exports = mongoose.model('funcionarios', funcionarioSchema)
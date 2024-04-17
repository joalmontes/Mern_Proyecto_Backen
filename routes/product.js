const express = require ('express')
const upload = require ('../libs/storage')
const { addProduct, getProducts, deleteProduct } = require('../controllers/productControllers')
const { addFuncionario, getFuncionario } = require('../controllers/productControllers')
const { addHistorial, getHistorial } = require('../controllers/productControllers')
const { addAparato, getAparato } = require('../controllers/productControllers')
const sendEmail = require('../utils/sendEmail')


const api = express.Router()

api.post('/products', upload.single('image'), addProduct)
api.post('/funcionario', addFuncionario)
api.post('/historial', addHistorial)
api.post('/aparato', addAparato)
api.post("/api/sendemail", async (req, res)=>{
    const {email}= req.body

    try {
        const send_to = email
        const sent_from = process.env.EMAIL_USER
        const reply_to = email
        const subject = "!!IMPORTANTE¡¡"
        const message = `
        <p>Estimado destinatario esperando que se encuete bien.
        me comunico para informarle que tiene que entegar el dispositivo que fue
        entregado a su persona en la sala de UTI</p>
        <h3>Este es un menaje programado porfavor no responder</h3>
        `

        await sendEmail(subject, message, send_to, sent_from, reply_to)
        res.status(200).json({success: true, message: "email sent"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})

api.delete('/products/:id', deleteProduct)

api.get('/products', getProducts)
api.get('/funcionario', getFuncionario)
api.get('/historial', getHistorial)
api.get('/aparato', getAparato)

module.exports = api
const Product = require('../models/Product')
const Funcionario = require('../models/Funcionarios')

async function addProduct(req, res) {
    try {
        const {
            nombre_funcionario,
            aparato,
            numero,
            lugar_donde,
            fecha_entrega
        } = req.body

        const product = Product({
            nombre_funcionario,
            aparato,
            numero,
            lugar_donde,
            fecha_entrega
        })

        const productStored = await product.save()

        res.status(201).send({ productStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function addFuncionario (req, res){
    try{ 
        const{
            nombre_Apellido,
            cargo
        } = req.body
        
        const funcionario = Funcionario({
            nombre_Apellido,
            cargo
    
        })

        const FuncionarioStored = await funcionario.save()
        res.status(201).send({ FuncionarioStored })

    } catch (e){
        res.status(500).send({ message: e.message })
    }
}



async function getFuncionario(req, res){
    const funcionarios = await Funcionario.find().lean().exec()
    res.status(200).send({ funcionarios })
}

async function getProducts(req, res) {
    const products = await Product.find().lean().exec()
    res.status(200).send({ products })
}

module.exports = {
    addProduct,
    getProducts,

    addFuncionario,
    getFuncionario,
}
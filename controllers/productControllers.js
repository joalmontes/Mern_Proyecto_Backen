const Product = require('../models/Product')
const Funcionario = require('../models/Funcionarios')
const Historial = require ('../models/historial')
const Aparato = require('../models/aparatos')

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
            cargo,
            correo
        } = req.body
        
        const funcionario = Funcionario({
            nombre_Apellido,
            cargo,
            correo
    
        })

        const FuncionarioStored = await funcionario.save()
        res.status(201).send({ FuncionarioStored })

    } catch (e){
        res.status(500).send({ message: e.message })
    }
}

async function addHistorial (req, res){
    try{ 
        const{
            aparato,
            mes,
            anno
        } = req.body
        
        const historial = Historial({
            aparato,
            mes,
            anno
    
        })

        const HistorialStored = await historial.save()
        res.status(201).send({ HistorialStored })

    } catch (e){
        res.status(500).send({ message: e.message })
    }
}

async function addAparato (req, res){
    try{ 
        const{
            dispositivo,
            modelo,
        } = req.body
        
        const aparato = Aparato({
            dispositivo,
            modelo,
    
        })

        const AparatoStored = await aparato.save()
        res.status(201).send({ AparatoStored })

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
async function getHistorial(req, res) {
    const historial = await Historial.find().lean().exec()
    res.status(200).send({ historial })
}

async function getAparato(req, res) {
    const aparato = await Aparato.find().lean().exec()
    res.status(200).send({ aparato })
}



async function deleteProduct(req, res) {
    const productId = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).send({ message: 'Producto no encontrado' });
        }

        res.status(200).send({ message: 'Producto eliminado correctamente', deletedProduct });
    } catch (error) {
        res.status(500).send({ message: 'Error al eliminar el producto', error });
    }
}



module.exports = {
    addProduct,
    getProducts,
    deleteProduct,

    addFuncionario,
    getFuncionario,

    addHistorial,
    getHistorial,

    addAparato,
    getAparato,
}
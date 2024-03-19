const Product = require('../models/product.model')

const addProduct = async (req,res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
            image: req.body.image,
            date: req.body.date
        });
      
        const product = await newProduct.save();
        res.status(200).json({
        status: true,
        message: 'success',
        data: product
        })

    } catch (error)
    {
        res.send(error.message)
        console.log(error.message)
    }
}

const allProducts = async (req,res) => {
    try {
        const allProducts = await Product.find()
        res.status(200).json({
            status: true,
            message: 'success',
            data: allProducts
        })
    } catch (error)
    {
        res.send(error.message)
        console.log(error.message)
    }
}

const productById = async (req,res,id) => {
    try {
        const product = await Product.findById(id)
        res.status(200).json({
            status: true,
            message: 'success',
            data: product
        })
    } catch (error)
    {
        res.send(error.message)
        console.log(error.message)
    }
}

const updateProduct = async () => {
    try{
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product)
        {
            res.status(404).json({
                status: false,
                message: 'Product Not Found!'
            })
        }

        res.status(200).json({
            status: true,
            message: `${id} product has been updated succesfully`
        })

    } catch (error)
    {
        res.send(error.message)
        console.log(error.message)
    }
}

const deleteProduct = async () => {
    try {
        await Product.findByIdAndDelete(id)

        res.status(200).json({
            status: true,
            message: `${id} product has been deleted succesfully`,
        })
      
    } catch (error)
    {
        res.send(error.message)
        console.log(error.message)
    }
}

module.exports = {
    addProduct,
    allProducts,
    productById,
    updateProduct,
    deleteProduct
}
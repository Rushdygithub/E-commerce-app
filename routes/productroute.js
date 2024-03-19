const {addProduct,allProducts,productById,updateProduct,deleteProduct} = require('../controllers/productcontroller')
const express = require('express')
const app = express()
const router = express.Router()
const mongoos = require('mongoose') //npm package used to intract with mongodb database
const Product = require('../models/product.model')

app.use(express.json()) //express json middlware - json format
app.use(express.urlencoded({extended:false})) //form format middleware
app.use('/api', router)//base route

//Add product 
router.post('/add-product', async (req,res)=> {
   await addProduct(req,res)
})

//Featch all products
router.get('/all/product', async (req,res)=> {
   await allProducts(req,res)
})

//Featch product by their ID
router.get('/product/:id', async (req,res)=> {
   const id = req.params.id
   await productById(req,res,id)
})

//Update product
router.put('/update/product/:id', async (req,res)=> {
    const id = req.params.id   
    await updateProduct(req,res,id)
})

//Delete a product
router.delete('/delete/product/:id', async (req,res)=> {
    const id = req.params.id
    await deleteProduct(req,res,id)
})

// MongoDB server connection
//mongoos.connect('mongodb+srv://mohomedrushdi972:lGRI2VPQd0OVhYwi@cluster0.krbag4i.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0')
mongoos.connect('mongodb+srv://6P5CjBFpTDeyrzQH:6P5CjBFpTDeyrzQH@e-commerce.xwsbesb.mongodb.net/')
.then(()=> {
    console.log('MongoDB connected succesfully')   
    let PORT = 8000
    app.listen(PORT, (error)=> {
    if (error) throw error
    console.log(`server is runing on PORT ${PORT}`)
    })
})
.catch((error)=> {
    console.log(`something went wrong ${error}`)
})
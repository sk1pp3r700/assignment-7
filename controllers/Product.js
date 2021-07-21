let products = require('../models/Product')

const getProduct = (req, res) =>{
    return res.json(products);
}
const getSpecificProduct = (req, res) =>{
    let productId = Number(req.params.id);
    let findProduct = products.find((product) => product.id === productId);

    if(!findProduct){
        return res.status(404).send(`Cannot find product, id:  ${productId}`);
    }else {
        return res.json(findProduct);
    }

}

const createProduct = (req, res) =>{

    if(!req.body.name || !req.body.description || !req.body.image || !req.body.price){
       return res.status(400).send('Please, fill all required fields.')
    }else{
let newProduct = {
    id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price
}
    products.push(newProduct);
    return res.json(products)
    }
}

const updateProduct = (req, res) =>{
    let productId = Number(req.params.id);
    let body = req.body;
    let product = products.find((product) => product.id === productId);
    let indexOfProduct = products.indexOf(product);
    if(!product){
        return res.status(404).send(`Product with id of ${productId} not found`)
    }else{
        let updateProduct = {...product, ...body};
        products[indexOfProduct] = updateProduct;
       return res.json(updateProduct)
    }
}

const deleteProduct = (req,res) =>{
    let productId = Number(req.params.id);
    let deleteProduct = products.filter((product) => product.id !== productId);
    if(!deleteProduct){
        return res.status(404).send(`Product with id of ${productId} not found`);
    }else{
        products = deleteProduct;
        return res.json(products);
    }
}

module.exports = { getProduct, getSpecificProduct, createProduct, updateProduct, deleteProduct}

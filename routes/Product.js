const express = require('express');
const router = express.Router();
const {getProduct, getSpecificProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/Product')
 
router.get('/', getProduct); 
router.get('/:id', getSpecificProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

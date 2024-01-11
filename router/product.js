
const express = require('express');
const productController = require('../controller/product');
const router = express.Router();
router
.post('/',productController.createProduct)
// use create read update delete(crud)


//read /:id
.get('/:id',productController.findProduct)
.get('/',productController.showAllProduct)

// one type of update only change that required 
.patch('/:id',productController.updateProduct)

// /put use update or change /overwrite data mins all delete data and show this in new data
.put('/:id',productController.replacePreoduct)

.delete('/:id',productController.deleteProduct)
exports.router = router;
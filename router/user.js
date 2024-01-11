
const express = require('express');
const userController = require('../controller/user');
const router = express.Router();
router
.post('/ ',userController.createProduct)
// use create read update delete(crud)


//read /:id
.get('/:id', userController.findProduct)
.get('/ ',userController.showAllProduct)

// one type of update only change that required 
.patch('/:id ',userController.updateProduct)

// /put use update or change /overwrite data mins all delete data and show this in new data
.put('/:id ',userController.replacePreoduct)

.delete('/:id',userController.deleteProduct)
exports.router = router;


const fs = require('fs');
//const index = fs.readFileSync('index.html','utf-8');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;
const model = require('../model/product');
const product = model.Product;

exports.createProduct =(req,res)=>{
 const products = new product();
    products.title = 'iphonex';
    products.price = 99999;
   products.rating = 5;
  products.save((err,doc)=>{
    console.log({err,doc})
    if(err){
        res.status(400).json(err);
    }
    else{
        res.status(201).json(doc);
    }
  })
    
};

// exports.createProduct =(req,res)=>{
//     console.log(req.body)
//     products.push(req.body)
//     res.status(201).json(req.body);
// }
exports.findProduct = (req,res)=>{
    const id = +req.params.id;
   const product =products.find(p=>p.id===id)
    res.json(product)
}
exports.updateProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json(productIndex);
}

exports.replacePreoduct =(req,res)=>{
    const id = +req.params.id;
   const productIndex = products.findIndex(p=>p.id===id)
   products.splice(productIndex,1,{...req.body,id:id})
   res.status(201).json();
}
 
exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
   const productIndex = products.findIndex(p=>p.id===id)
   const product = products[productIndex]
   products.splice(productIndex,1)
   res.status(201).json(product);
}

exports.showAllProduct = (req,res)=>{
    res.json(products)
}

// // read /check or find
// server.get('/products',(req,res)=>{
   
//     // res.status(201).send('<h1>hello</h1>')
//   //res.sendFile('C:\Users\pgg52\OneDrive\Desktop\html\node\node_modules\express\lib\router\index.html')
//   res.json(products)
//  //res.sendStatus(404)
 
// });
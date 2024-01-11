

const fs = require('fs');
//const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const user = data.users;


exports.createProduct =(req,res)=>{
    console.log(req.body)
    user.push(req.body)
    res.status(201).json(req.body);
}
exports.findProduct = (req,res)=>{
    const id = +req.params.id;
    const product = user.find(p=>p.id===id)
    res.json(product)
}
exports.updateProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = user.findIndex(p=>p.id===id)
    const product = user[productIndex]
    user.splice(productIndex,1,{...product,...req.body})
    res.status(201).json(productIndex);
}

exports.replacePreoduct =(req,res)=>{
    const id = +req.params.id;
   const productIndex = user.findIndex(p=>p.id===id)
   user.splice(productIndex,1,{...req.body,id:id})
   res.status(201).json();
}
 
exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
   const productIndex = user.findIndex(p=>p.id===id)
   const product = user[productIndex]
   user.splice(productIndex,1)
   res.status(201).json(product);
}

exports.showAllProduct = (req,res)=>{
    res.json(user)
}

// // read /check or find
// server.get('/user',(req,res)=>{
   
//     // res.status(201).send('<h1>hello</h1>')
//   //res.sendFile('C:\user\pgg52\OneDrive\Desktop\html\node\node_modules\express\lib\router\index.html')
//   res.json(user)
//  //res.sendStatus(404)
 
// });
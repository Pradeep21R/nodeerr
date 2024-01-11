// const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;



require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const { Schema } = mongoose;

const server = express();

const productRouter = require('./router/product')
const userRouter = require('./router/user');
console.log('env',process.env.DB_PASSWORD)


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connected')

}

//bodyParser
server.use(express.json());
// server.use(express.urlencoded());

console.log('server start')
server.use(morgan('default'))
server.use(express.static(process.env.PROCESS_FILE));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
// server.use((req,res,next)=>{
//  console.log( req.get('User-Agent'),req.method, new Date(),req.ip,req.hostname)
//  next()
// })

// const auth =(req,res,next)=>{
//     // // console.log(req.query)
//     // if(req.body.password=='123'){
//     //     next()
//     // }
//     // else{
//     //     res.sendStatus(401);
//     // }
//     next()
// }
//create products use post/seve data to use




server.listen(process.env.PORT);


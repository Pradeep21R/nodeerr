
const mongoose = require('mongoose');
const { Schema } = mongoose;

//schema
const productSchema = new Schema({
    title: {type:String,required:true},
    description : {type:String,required:true},
    price: {type:Number,required:true},
    discountPercentage:{type: Number,min:[0,'wrong min discount'],max:[50,'wrong max discount'],required:true},
    rating: {type:Number,min:[0,'wrong min rating'],max:[5,'wrong max rating'], required:true},
    stock: {type:Number,required:true},
    brand: {type:String,required:true},
    category : {type:String,required:true}
  });

  exports.Product = mongoose.model('Product', productSchema);
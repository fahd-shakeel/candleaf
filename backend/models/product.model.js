const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'Account'
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId, ref:'Customer'
    },
    product_id:{type:String},
    product_name:{type:String},
    product_price:{type:Number},
    product_quantity:{type:Number}
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;
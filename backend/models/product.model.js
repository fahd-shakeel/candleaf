const mongoose = require('mongoose');
import Account from "./account.model";
import Customer from "./customer.model"

const productSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:Account, require:true
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId, ref:Customer, require:true
    },
    product_name:String,
    product_price:Number,
    product_quantity:Number
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;
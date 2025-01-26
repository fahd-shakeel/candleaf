const mongoose = require('mongoose');
import {addressDetailsSchema} from "./user.model"
import User from "./user.model";
import Product from "./product.model";
import Customer from "./customer.model"

const orderSchema = new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId , ref:Product, require:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId, ref:User, require:true
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId, ref:Customer, require:true
    },
    shipping_contact:String,
    shipping_addresss:String,
    product_quantity:Number
})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;
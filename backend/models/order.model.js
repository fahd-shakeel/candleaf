const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product_id:{
        type:String , ref:'Product', require:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId, ref:'User', require:true
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId, ref:'Customer', require:true
    },
    shipping_contact:{type:String},
    shipping_addresss:{type:String}
})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;
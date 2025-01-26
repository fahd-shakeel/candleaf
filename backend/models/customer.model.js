const mongoose = require('mongoose');
// import {Account} from "./account.model";

// const addressDetailsSchema = new mongoose.Schema({
//     city:String,
//     postal_code:String,
//     country:String
// })


const customerSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId, ref:'Account'
    },
    customer_address_and_number:{type:String},
    first_name:{type:String},
    last_name:{type:String},
    // address:[addressDetailsSchema],
    city:{type:String},
    postal_code:{type:String},
    country:{type:String},
    shipping_note:{type:String}
})

const Customer = mongoose.model('Customer',customerSchema);
module.exports = Customer;
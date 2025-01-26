const mongoose = require('mongoose');
import Order from "./order.model";

const transactionSchema = new mongoose.Schema({
    order_id:{
        type:mongoose.Schema.Types.ObjectId, ref:Order, require:true
    },
    date:{type:new Date()},
    amount:Number,
})

const Transaction = mongoose.model('Transaction',transactionSchema);

moduel.exports = Transaction;
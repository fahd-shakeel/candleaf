const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    email:{type:String, require:true},
    password:{type:String, require:true},
    user_email:{type:String, require:true}
},{
    timestamps:true
})

const Account = mongoose.model('Account',accountSchema);

module.exports = Account;


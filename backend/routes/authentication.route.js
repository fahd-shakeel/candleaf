const router = require('express').Router();
let Customer = require('../models/customer.model');
let Account = require('../models/account.model')

router.route('/').get((req,res)=>{
    res.send("this is from product page")
})

router.route('/').post(async(req,res)=>{
    const user_email = req.body.userEmail;
    const first_name= req.body.firstName;
    const last_name=req.body.lastName;
    const customer_address_and_number =req.body.addressAndNumber;
    const city = req.body.city;
    const postal_code = req.body.postalCode;
    const country = req.body.country;
    const shipping_note=req.body.shippingNote;
    const user_id = req.cookies.user_id;
    let customer_id = "";

    const id = Account.findByIdAndUpdate({_id:user_id},{user_email:user_email})
    .then((response=>console.log("account found")))
    .catch((err)=>console.log("account not found"))
 
    const data = new Customer({
        user_id, customer_address_and_number, first_name, last_name, city, postal_code, country, shipping_note
    })

    await data.save()
    .then((response)=>res.send(response.id))
    .catch((err)=>res.send(err))
})
module.exports = router;
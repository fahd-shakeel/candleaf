let Order = require("../models/order.model")
const router = require('express').Router();

router.route('/shipping/:id').post(async(req,res)=>{
    const shipping_contact = req.body.shippingContact;
    const shipping_addresss = req.body.shippingAddress;
    const user_id=req.cookies.user_id;
    const customer_id=req.cookies.customer_id;
    const product_id = req.body.id;

    const newOrder = new Order({
        product_id, user_id, customer_id,shipping_contact, shipping_addresss
    })

    await newOrder.save()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))

})

module.exports = router;
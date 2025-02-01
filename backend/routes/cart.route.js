let Product = require("../models/product.model")
const router = require('express').Router();

router.route('/').post(async(req,res)=>{
    const {product_quantity, product_id, product_name, product_price} = req.body;
    const user_id=req.cookies.user_id;
    const customer_id=req.cookies.customer_id;

    const newProduct = new Product({
        user_id, customer_id,product_id, product_name, product_price, product_quantity
    })

    await newProduct.save()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))

})

module.exports = router;
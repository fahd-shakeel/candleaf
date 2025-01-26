let Account = require("../models/account.model")
const router = require('express').Router();
const jwt = require('jsonwebtoken');

// router.route('/').get((req,res)=>{
//     res.send("This is from API");
// })

router.route('/signup').post(async (req,res)=>{
    const email=req.body.email;
    const password = req.body.password;

    const newAccount =new Account({
        email,password
    })
    
    await newAccount.save()
    .then((response)=>res.status(200).json("Data Added"))
    .catch((err)=>res.status(400).json("Error"+err))
})

router.route('/login').post(async (req,res)=>{
    const {email, password} = req.body;

    await Account.findOne({email:email})
    .then(response=>{
        if(password===response.password){
            // window.sessionStorage.setItem("user_id",response.id)
            payload = JSON.stringify(response)
            const token = jwt.sign(payload,'secret-key');
            res.status(200).json({'token':token,'user_id':response.id})
        }
        else{
            res.status(404).json("Incorrect Email or Password")
        }
    })
})
module.exports = router;
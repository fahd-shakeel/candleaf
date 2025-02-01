const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const account = require('./routes/account.route');
const authentication = require('./routes/authentication.route')
const product = require('./routes/product.route')
const cart = require("./routes/cart.route")
const order = require("./routes/order.route")

// require("../backend/webpack.config")

const clientDomain = "https://candleaf-navy.vercel.app"
// const domain = "http://localhost:3000";

app.use(cookieParser());
app.use(cors({origin:clientDomain,credentials:true}));
// app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://new_user_fahd:fahd@cluster0.hyeth5m.mongodb.net/candleaf?retryWrites=true&w=majority";
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB connection is established!");
})

app.use('/',account);
app.use('/authentication/:id',authentication);
app.use('/product/:id',product);
app.use('/cart/:id',cart)
app.use(order)

app.listen(3001,(req,res)=>{
    console.log("Server is running on port 3001");
})
import React from 'react'
import Layout from "./Layout";
import "./Cart.css";
import CartLayout from './CartLayout';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

/*****************start-of-import-images*************/
import candleCleanLavender from "../assets/images/candle-clean-lavander.svg"
import candleCoolBlueberries from "../assets/images/candle-cool-blueberries.svg"
import candleFragrentCinnamon from "../assets/images/candle-fragrent-cinnamon.svg"
import candleJuicyLemon from "../assets/images/candle-juicy-lemon.svg"
import candleSpicedMint from "../assets/images/candle-spiced-mint.svg"
import candleSummerCherries from "../assets/images/candle-summer-cherries.svg"
import candleSweetStrawberry from "../assets/images/candle-sweet-strawberry.svg"
import candleVedanomsCarrens from "../assets/images/candle-vedanom-carrens.svg"

/*****************end-of-import-images*************/
const Cart = () => {
  const domain = "https://candleaf-backend.vercel.app"

  // const domain = "http://localhost:3001"

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(localStorage.getItem('product_quantity'));

  let {id} = useParams();
  const product_details=[
    {
        id:1,
        image_of_product:candleSpicedMint,
        name_of_product:"Spiced Mint",
        price_of_product:"9.99",
    },
    {
        id:2,
        image_of_product:candleSweetStrawberry,
        name_of_product: "Sweet Strawberry",
        price_of_product:"9.99"    
    },
    {
        id:3,
        image_of_product:candleCoolBlueberries,
        name_of_product: "Cool Blueberries",
        price_of_product:"9.99" 
    },
    {
        id:4,
        image_of_product:candleJuicyLemon,
        name_of_product: "Juicy Lemon",
        price_of_product:"9.99" 
    },
    {
        id:5,
        image_of_product:candleVedanomsCarrens,
        name_of_product: "Vedanom Carrens",
        price_of_product:"9.99" 
    },
    {
        id:6,
        image_of_product:candleFragrentCinnamon,
        name_of_product: "Frangrent Cinnamon",
        price_of_product:"9.99" 
    },
    {
        id:7,
        image_of_product:candleSummerCherries,
        name_of_product: "Summer Cherries",
        price_of_product:"9.99" 
    },
    {
        id:8,
        image_of_product:candleCleanLavender,
        name_of_product: "Clean Lavender",
        price_of_product:"9.99" 
    }
  ]

  const cartLayoutList=()=>{
    return product_details.map((details)=>{
      if(id==details.id){
        return <CartLayout id={details.id} name={details.name_of_product} image={details.image_of_product} price={details.price_of_product} quantity={Number(quantity)} val={setQuantity}/>
      }
    })
  }

  const handleClick=()=>{
    
    localStorage.setItem('product_quantity', quantity)
    const product_quantity = Number(localStorage.getItem('product_quantity'))
    const product_id = localStorage.getItem('product_id')
    const product_name = localStorage.getItem('product_name')
    const product_price = localStorage.getItem('product_price')

    const data = {product_quantity, product_id, product_name, product_price}

    axios.post(`${domain}/cart/:id`,data, {withCredentials:true})
    .then(response=>{
      navigate('/shipping/'+id)
    })
    .catch(err=>alert(err))
  } 
  
  return (
    <div>
      <Layout>
        <div className='cart'>
          <div className='cart-heading'>
                  <h6>Your cart Items</h6>
                  <a href='/'><p>Back to shopping</p></a>
          </div>
          <div className='checkout-products'>
              <table class="table">
                <thead>
                  <tr>
                    <th id="product" scope="col">Product</th>
                    <th id="price" scope="col">Price</th>
                    <th id="quantity" scope="col">Quantity</th>
                    <th className="right" id="total" scope="col">Total</th>
                  </tr>
                </thead>
                {/* <CartLayout /> */}
                {cartLayoutList()}
              </table>
          </div>
          <div className='sub-total-and-checkout'>
              <div className='sub-total'>
                <div id='desc'>
                  <p>Sub-total</p>
                  <p>$9.99</p>
                </div>
                <p id="tax-shipping">Tax and shipping cost will be calculated later</p>
              </div>
              <div className='checkout'>
                    <button className='btn' type='button' onClick={handleClick}>Check-out</button>
              </div>
          </div>
        </div>
      </Layout>
  </div>

  )
}

export default Cart
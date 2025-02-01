import React from 'react'
import Layout from "./Layout";
import "./Shipping.css";
// import candleImage from "../assets/images/candle-spiced-mint.svg";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

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

// const domain = "http://localhost:3001"
const domain = "https://candleaf-navy.vercel.app"

const Shipping = () => {
  let {id}=useParams();

  const [shippingContact, setShippingContact] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const product_details=[
    {
        id:"1",
        image_of_product:candleSpicedMint,
        name_of_product:"Spiced Mint",
        price_of_product:"9.99",
    },
    {
        id:"2",
        image_of_product:candleSweetStrawberry,
        name_of_product: "Sweet Strawberry",
        price_of_product:"9.99"    
    },
    {
        id:"3",
        image_of_product:candleCoolBlueberries,
        name_of_product: "Cool Blueberries",
        price_of_product:"9.99" 
    },
    {
        id:"4",
        image_of_product:candleJuicyLemon,
        name_of_product: "Juicy Lemon",
        price_of_product:"9.99" 
    },
    {
        id:"5",
        image_of_product:candleVedanomsCarrens,
        name_of_product: "Vedanom Carrens",
        price_of_product:"9.99" 
    },
    {
        id:"6",
        image_of_product:candleFragrentCinnamon,
        name_of_product: "Frangrent Cinnamon",
        price_of_product:"9.99" 
    },
    {
        id:"7",
        image_of_product:candleSummerCherries,
        name_of_product: "Summer Cherries",
        price_of_product:"9.99" 
    },
    {
        id:"8",
        image_of_product:candleCleanLavender,
        name_of_product: "Clean Lavender",
        price_of_product:"9.99" 
    }
  ]

  let currentProduct = [];

  const data = {
    shippingAddress, shippingContact, id
  }

  function handlePayment (){
   axios.post(`${domain}/shipping/:id`,data, {withCredentials:true})
   .then(response=>alert("Payment gateway will be added shortly"))
   .catch(err=>alert(err))
  }

  const product=()=>{
    return product_details.map((details)=>{
      if(id===details.id){
        currentProduct.push(details);
      }
    })
  }


  return (
    <Layout>
        <div className='shipping'>
        {product()}

          <div className="roboto reg" id='head'>
            <p id="heading">Your Order :</p>
            <p className="med" id='price-tag'>$ 9.99</p>
          </div>

          {/********************** left portion */}
            <div className='left'>
                <div className='left-content'>
                        <div id="details-flow">
                          {/* <p>{`Cart  >  Details  >  Shipping  >  Payment`}</p> */}
                          <p id="cart">{`Cart > `}</p>
                          <p id="details">{`Details > `}</p>
                          <p id="shipping">{`Shipping >`}</p>
                          <p id="payment">{`Payment`}</p>
                        </div>

                        <form className='form' id="form-area">
                            <div className="contact">
                                <p>Contact: </p>
                                <input onChange={(e)=>setShippingContact(e.target.value)} type='textbox' placeholder='Edit'/>
                                
                            </div>

                            <div className='line'></div>
                            
                            <div className='ship'>
                                <p>Ship to: </p>
                                <input onChange={(e)=>setShippingAddress(e.target.value)} type='textbox' placeholder='Edit'/>
                            </div>

                            
                        </form>

                        <div className='shipping-method'>
                            <p id="shipping-method-heading">Shipping Method</p>
                            <div id='shipping-method-body'>
                                <input className="blue-accent" id="radio-button"type='radio' checked="true"/>
                                <label>Standard Shipping</label>
                                <p id="free-tag">Free</p>
                            </div>
                        </div>


                        <div className='cart-and-shopping'>
                          <Link to={'/cart/'+id}><a id="back-to-cart" href={`/cart/`+id}><p>Back to cart</p></a></Link>
                          <a id="link-of-btn"><button id="btn-shipping" className='btn' type='button' onClick={handlePayment}><p className='roboto med'>Go to Payment</p></button></a>
                        </div>
                </div>
            </div>




            {/******************** right portion */}
            <div className='right'>
                <div className='right-content'>
                  <div className='image-and-text'>
                    <img src={currentProduct.map((prod)=>prod.image_of_product)} alt='candle'/>
                    <div id="text-heading">
                      <p id="product-name">{currentProduct.map((prod)=>prod.name_of_product)} Candleaf<span>&#174;</span></p>
                      <p id="product-price">$ {currentProduct.map((prod)=>prod.price_of_product)}</p>
                    </div>
                  </div>
                  
                  <div className='line'></div>

                  <div className='coupon input-label'>
                    <input className='input' type='text' placeholder='Coupon Code' />
                    <button className='btn btn-primary' type='button'><p>Add code</p></button>
                  </div>

                  <div className='line'></div>

                  <div className='subtotal'>
                    <p>Subtotal</p>
                    <p id="product-price">$ {currentProduct.map((prod)=>prod.price_of_product)}</p>
                  </div>

                  <div className='shipping'>
                    <p>Shipping</p>
                    <p id="shipping-price">Free shipping</p>
                  </div>

                  <div className='line'></div>

                  <div className='total-price'>
                    <p>Total</p>
                    <p id="product-price">$ {currentProduct.map((prod)=>prod.price_of_product)}</p>
                  </div>
                </div>  
            </div>
        </div>
    </Layout>
  )
}

export default Shipping;
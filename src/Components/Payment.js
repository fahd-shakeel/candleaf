import React from 'react'
import Layout from "./Layout";
import "./Payment.css";
import candleImage from "../assets/images/candle-spiced-mint.svg";
import { useParams } from 'react-router-dom';

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

const Payment = () => {
  let {id}=useParams();

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

  let currentProduct=[];

  const product=()=>{
    product_details.map((details)=>{
      if(id===details.id){
        currentProduct.push(details)
      }
      return true;
    })
  }

  return (
    <Layout>
        <div className='payment'>
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
                            <div className='method' >
                                <p>Method: </p>
                                <input type='textbox' value="Standard Shipping-Free" placeholder='Edit'/>
                            </div>
                            
                        </form>

                        {/* payment method */}

                        <div className='payment-method'>
                            <p id="payment-method-heading">Payment Method</p>

                              <form className="from" id="form-payment-method">
                                <input id="card-number"type='textbox' placeholder="Card Number" checked="true"/>
                                <input id="holder-name"type='textbox' placeholder="Holder Name" checked="true"/>
                                <div id="expiration-and-cvv">
                                    <input id="expiration" type="textbox" placeholder="Expiration" />
                                    <input id="cvv" type="textbox" placeholder="CVV"/>
                                </div>
                              </form>
                        </div>
                        

                        {/* Billing Address */}

                        <div className='billing-address'>
                            <p id="billing-address-heading">Billing Address</p>
                            <form className="from" id="form-area-lower">
                                <div id='billing-address-body'>
                                    <input className='blue-accent' id="radio-button"type='radio' name="address" value="same-address" checked="true"/>
                                    <label>Same as the shipping address</label>
                                </div>
                            </form>
                        </div>


                        <div className='cart-and-shopping'>
                          <a id="back-to-cart" href={'/shipping/'+id}><p>Back to cart</p></a>
                          <button id="btn-shipping" className='btn' type='button'><p>Go to Payment</p></button>
                        </div>
                </div>
            </div>




            {/******************** right portion */}
            <div className='right'>
                <div className='right-content'>
                  <div className='image-and-text'>
                    <img src={candleImage} alt='candle'/>
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

export default Payment;
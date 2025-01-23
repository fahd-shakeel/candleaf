import React from 'react'
import Layout from "./Layout";
import "./Thanks.css";
import candleImage from "../assets/images/candle-spiced-mint.svg";
import checkCircle from "../assets/images/check-circle.svg";

const Thanks = () => {
  return (
    <Layout>
        <div className='thanks'>

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

                        <div className='thanks-body'>
                            <img src={checkCircle} alt='check circle' />
                            <p id="payment-confirmed-tag">Payment Confirmed</p>
                            <p id="order-num">Order #2039</p>
                            <p id="desc">Thank you Joe for buying Candleaf. The nature is grateful to you. Now that you order is Confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.</p>
                            <button id="btn-shipping" className='btn' type='button'><p>Back to Shopping</p></button>
                            <a id="back-to-cart" href='/'><p>Print receipt</p></a>
                        </div>
                </div>
            </div>




            {/******************** right portion */}
            <div className='right'>
                <div className='right-content'>
                  <div className='image-and-text'>
                    <img src={candleImage} alt='candle'/>
                    <div id="text-heading">
                      <p id="product-name">Spiced Mint Candleaf<span>&#174;</span></p>
                      <p id="product-price">$ 9.99</p>
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
                    <p id="product-price">$ 9.99</p>
                  </div>

                  <div className='shipping'>
                    <p>Shipping</p>
                    <p id="shipping-price">Free shipping</p>
                  </div>

                  <div className='line'></div>

                  <div className='total-price'>
                    <p>Total</p>
                    <p id="product-price">$ 9.99</p>
                  </div>
                </div>  
            </div>
        </div>
    </Layout>
  )
}

export default Thanks;
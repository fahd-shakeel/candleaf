import React, { useEffect, useState } from 'react'
import Layout from "./Layout";
import "./Authentication.css";
import candleImage from "../assets/images/candle-spiced-mint.svg";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useCookies} from 'react-cookie'
import axios from 'axios'

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

const Authentication = () => {
  const domain = "https://candleaf-backend-git-main-fahd-shakeels-projects.vercel.app"

  const [userEmail, setUserEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [addressAndNumber, setAddressAndNumber] = useState("")
  const [shippingNote, setShippingNote] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);

  let {id} = useParams();
  const navigate = useNavigate();

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

  const sumbit =(e)=>{
    e.preventDefault();
  }
  const handleClick = () =>{
    // console.log(userEmail)
    // console.log(firstName);
    // console.log(lastName);
    // console.log(addressAndNumber);
    // console.log(shippingNote);
    // console.log(city);
    // console.log(postalCode);
    // console.log(country);
    

    const data ={
      userEmail, firstName, lastName, addressAndNumber, shippingNote, city, postalCode, country
    }

    axios.post(`${domain}/:id`,data, {withCredentials:true})
    .then((response)=>{
      setCookie('cutomer_id',response.data)
      navigate(`/cart/${id}`)
    })
    .catch((err)=>alert(err))
  }

  return (
    <Layout>
        <div className='authentication'>
          {/* calling function which will push the current product in currentProduct */}
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

                        <form className='form' onSubmit={sumbit}>

                          <div className='contact'>
                            <div id='contact-heading'>
                              <p id='title'>Contact</p>
                              <div id='contact-login'>
                                <p id="description">{`Do you have an account?`}</p>
                                <a href='/'><p id="login">Login</p></a>
                              </div>
                            </div>
                            <input id="contact-input" type='email' placeholder='Your Email' required onChange={(e)=>setUserEmail(e.target.value)}></input>
                            
                            <div className="input-label checkbox-desc">  
                              <input className="blue-accent" id="checkbox-newsletter" type="checkbox"/> 
                              <label>Add me to Candleaf newsletter for a 10% discount</label>
                            </div>
                          </div>

                          <div id="shipping">
                            <label id="title">Shipping Address</label>

                            <div id="name">
                              <input id='first-name' type="text" placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
                              <input id='last-name' type="text" placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}/>
                            </div>

                            <input id='address' type="text" placeholder='Address and Number' onChange={(e)=>setAddressAndNumber(e.target.value)}/>
                            <input id='shipping-note' type='text' placeholder='Shipping Note (optional)' onChange={(e)=>setShippingNote(e.target.value)}/>

                            <div id="address-other">
                              <input id="city" placeholder='City'onChange={(e)=>setCity(e.target.value)}/>
                              <input id="postal-code" placeholder='Postal Code'onChange={(e)=>setPostalCode(e.target.value)}/>
                            </div>

                            <input id="country" type="text" placeholder='Country' onChange={(e)=>setCountry(e.target.value)}/>

                            <div className='input-label country-checkbox'>
                              <input className="blue-accent" id="checkbox-saveinfo" type="checkbox"/>
                              <label>Save this informations for a future fast checkout</label>
                            </div>
                          </div>
                        </form>

                        <div className='cart-and-shopping'>
                          <Link to={`/product/`+id}><p>Back to product</p></Link>
                          
                          <a id="link-of-btn"><button  className='btn' id="btn-shipping" type='button' onClick={handleClick}><p className='roboto med'>Go to Cart</p></button></a>
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
                    <p id="product-price">$ 9.99</p>
                  </div>

                  <div className='shipping'>
                    <p>Shipping</p>
                    <p>Calculated at next step</p>
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

export default Authentication
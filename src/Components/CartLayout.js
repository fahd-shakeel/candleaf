import React from 'react'
import { useState, createContext, useEffect } from 'react';
import "./CartLayout.css"
import './QuantityButton.js'
import QuantityButton from './QuantityButton.js';
import { useNavigate } from 'react-router-dom';

const CartLayout = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const navigate = useNavigate();

  
  const handleClick=()=>{
    localStorage.removeItem('product_id')
    localStorage.removeItem('product_quantity')
    localStorage.removeItem('product_name')
    localStorage.removeItem('product_price')
  }

  useEffect(()=>{
    props.val(quantity)
  },[quantity])
  

  return (
    <>
        <tbody>
            <tr>
                <th scope="row">
                  <div id="product-details">
                    <img src={props.image} alt='candle'/>
                      <div id="product-desc">
                        <p id="title-of-product">{props.name} Candleaf<span>&#174;</span></p>
                        <a href="/" onClick={handleClick}><p id="remove-link">Remove</p></a>
                        <div id='quantity-area'>
                          <p id="quantity-heading">Quantity</p>
                          <QuantityButton val={setQuantity} quantity={quantity}/>
                        </div>
                        
                      </div>
                  </div>
                </th>
                <td id="price">$ {props.price}</td>
                <td id="quantity"><QuantityButton val={setQuantity} quantity={quantity}/></td>
                <td className="right" id='total'>$ 9.99</td>
                
            </tr>
            
        </tbody>
    </>
  )
}

export default CartLayout
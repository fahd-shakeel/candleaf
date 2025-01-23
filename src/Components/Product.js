import React, { useState } from 'react'
import Layout from './Layout';
import "./Product.css"
import productImage from "../assets/images/candle-spiced-mint.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate, useParams } from 'react-router-dom';
import QuantityButton from './QuantityButton';

// const useHandleClick=()=>{
//   let {id} = useParams();

  
// }

const Product = ()=>{
  let {id} = useParams();
  const navigate = useNavigate();
  
  const [quantity, setQuantity] = useState(1);

  function handleclick(){
    localStorage.setItem('product_quantity',quantity)
    navigate('/authentication/'+id)
    // console.log(quantity) 
  }

  return (
    <Layout>
      <div className='product'>
        
        <div className='title'>
          <h6 id="title-of-product">Spiced mint Candleaf<span>&#174;</span></h6>
        </div>


        <div className='product-image'>
          <LazyLoadImage id="image-of-product" src={productImage} alt='product' />
        </div>


        <div className='product-details'>

          <div className='price-and-quantity'>
            <p id='product-price'>$ 9.99</p>
            <div className='counter'>
              <p id="quantity-tag">Quantity</p>
              <div className='btn-inc-dec'>
                <QuantityButton val={setQuantity} quantity={quantity}/>
              </div>
            </div>

            
          </div>

          <div className='product-cart'>
              <div id="one-time">
                <input className="blue-accent" type="radio" name='radio' value="one-time" checked="true"/>
                <p className='margin-left-1em roboto reg'>One time purchase</p>
              </div>

              <div id="multiple-time-and-content">
                
                  <div id="multiple-time" >
                    <input className="blue-accent" type="radio" name='radio' value="multiple-time"/>
                    <div id="subscribe-week" className='margin-left-1em'>
                      <p id="subscribe-content" className='roboto reg'>Subscribe</p>
                    </div>
                    
                  </div>
                
                  <div id='content'>
                    <p id="subscribe-content" className='poppins reg'>Subscribe now and get 10% of discount on every recurring order. The discount will be applied at checkout.</p>
                    <a href="#" id="see-details"><p className='poppins reg'>See details</p></a>
                  </div>

              </div>

              <div id="btn-checkout">
                    <button id="checkout" className='btn' onClick={handleclick}>Add to cart</button>
              </div>
               

              
          </div>
          
          
        </div>




        <div className='product-description'>
          <div id='product-description-content'>
            <p className='poppins reg'><span id="heading">Wax: </span>Top grade Soy wax that delivers a smoke less, consistent burn.</p>
            <p className='poppins reg'><span id="heading">Fregrance: </span>Premiun quality ingredients with natural essential oils.</p>
            <div id="other-description">
              <p className='poppins reg'><span id="heading">Burning Time: </span>70-75 hours</p>
              <p className='poppins reg'><span id="heading">Dimension: </span>10cm x 5cm</p>
              <p className='poppins reg'><span id="heading">Weight: </span>400gm</p>
            </div>
          </div>
          

          <div id="image-content" className='poppins med'>
            <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
          </div>
        </div>
          
      </div>
    </Layout>
  )
}

export default Product;
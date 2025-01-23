import React from 'react'
import "./ProductLayout.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductLayout = (props) => {

  const handleClick = ()=>{
    localStorage.setItem("product_id",props.id)
    localStorage.setItem("product_name",props.name)
    localStorage.setItem("product_price",props.price)
  }
  return (
    <div className="product-layout">
      
      <Link to={`/product/`+props.id} onClick={handleClick}>
        <div className='image'>
          <LazyLoadImage src={props.image} alt='spiced mint' />
        </div>
        <div className='description-of-product'>
          <div className='name-of-product'>
            {props.name}
          </div>
          <div className='price-of-product'>
            {props.price+"$"}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductLayout;
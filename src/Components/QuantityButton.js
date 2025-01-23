
import { useState } from 'react'
import './QuantityButton.css';

const QuantityButton = (props) => {
  //localStorage.getItem('product_quantity')
    const [num, setNum] = useState(props.quantity)
    


    const increment=()=>{
        if(num>4){
          alert("Sorry we cannot get orders more than 5")
        }else{
          setNum(num+1)
          props.val(num+1)
          // console.log(num)
        }
        
    }

    const decrement = () =>{
      if(num<2){
        alert("Minimum number of order is 1")
      }
      else{
        
        setNum(num-1)
        props.val(num-1)
        // console.log(num)
      }
    }

  return (
    <div className='flex-btn'>
        <button id="dec-btn" onClick={decrement}><p>-</p></button>
        <p id='value' className='reg'>{num}</p>
        <button id="inc-btn" onClick={increment}><p>+</p></button>
    </div>
  )
}

export default QuantityButton
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <>
        {/******Header of the page */}
        <Navbar/> 

            {/**Displays all the elements between the tags */}
            {props.children}

        {/******Footer of the page */}
        <Footer/>
    </>
  )
}

export default Layout
import React from 'react'
import "./Footer.css";
import logoBlack from "../assets/images/logo-black.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {
  return (
    <>
    
        <div className='footer'>
            <div className='footer-area'>
                <div className='footer-left-area'>
                    <LazyLoadImage id="footer-image"src={logoBlack} alt="logo-black"/>
                    <p>your natural candle made for your home and for your wellness</p>
                </div>

                <div className='footer-right-area'>
                    <div className='discovery-section'>
                        <p>Discovery</p>
                        <a href='#'>New Seasoned</a>
                        <a href='#'>Most Searched</a>
                        <a href='#'>Most Selled</a>
                    </div>
                    <div className='about-section'>
                        <p>About</p>
                        <a href='#'>Help</a>
                        <a href='#'>Shipping</a>
                        <a href='#'>Affiliate</a>
                    </div>
                    <div className='info-section'>
                        <p>Info</p>
                        <a href='#'>Contact us</a>
                        <a href='#'>Privacy Policies</a>
                        <a href='#'>Terms & Conditions</a>
                    </div>
                </div>

            </div>

            
        </div>

        <div className='footer-note'>
            <div id='copyright-area'>
                <p>&copy;Candleaf All Rights Reserved.</p>
            </div>
            
            <div id='designed-by'>
                <p>Designed by Fahd Shakeel</p>
            </div>

        </div>
    </>
  )
}

export default Footer;
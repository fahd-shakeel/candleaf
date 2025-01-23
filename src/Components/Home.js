import React from 'react';
import "./Home.css";
import bgImage from "../assets/images/bg-image.svg";
import benefitSectionImage from "../assets/images/benefits-section-image.svg";
import checkmark from "../assets/images/checkmark-circle.svg";
import ProductLayout from './ProductLayout';
import TestimonialCard from './TestimonialCard';
import Layout from './Layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//**************import-of-images****************
import candleCleanLavender from "../assets/images/candle-clean-lavander.svg"
import candleCoolBlueberries from "../assets/images/candle-cool-blueberries.svg"
import candleFragrentCinnamon from "../assets/images/candle-fragrent-cinnamon.svg"
import candleJuicyLemon from "../assets/images/candle-juicy-lemon.svg"
import candleSpicedMint from "../assets/images/candle-spiced-mint.svg"
import candleSummerCherries from "../assets/images/candle-summer-cherries.svg"
import candleSweetStrawberry from "../assets/images/candle-sweet-strawberry.svg"
import candleVedanomsCarrens from "../assets/images/candle-vedanom-carrens.svg"
//************end-import-images********************

//**********import-of-testimonial-images******************/
import authorLuisa from "../assets/images/author-luisa.svg";
import authorEdoardo from "../assets/images/author-edoardo.svg"
import authorMart from "../assets/images/author-mart.svg"
//***********end-of-testimonial-images******************** */

// const backgroundImage = lazy(()=> import("../assets/images/bg-image.svg"));



const Home = ()=>{
    const product_id="";


    const product_details=[
        {
            id:1,
            image_of_product:candleSpicedMint,
            name_of_product:"Spiced Mint",
            price_of_product:"9.99",
        },
        {
            id:2,
            image_of_product:candleSweetStrawberry,
            name_of_product: "Sweet Strawberry",
            price_of_product:"9.99"    
        },
        {
            id:3,
            image_of_product:candleCoolBlueberries,
            name_of_product: "Cool Blueberries",
            price_of_product:"9.99" 
        },
        {
            id:4,
            image_of_product:candleJuicyLemon,
            name_of_product: "Juicy Lemon",
            price_of_product:"9.99" 
        },
        {
            id:5,
            image_of_product:candleVedanomsCarrens,
            name_of_product: "Vedanom Carrens",
            price_of_product:"9.99" 
        },
        {
            id:6,
            image_of_product:candleFragrentCinnamon,
            name_of_product: "Frangrent Cinnamon",
            price_of_product:"9.99" 
        },
        {
            id:7,
            image_of_product:candleSummerCherries,
            name_of_product: "Summer Cherries",
            price_of_product:"9.99" 
        },
        {
            id:8,
            image_of_product:candleCleanLavender,
            name_of_product: "Clean Lavender",
            price_of_product:"9.99" 
        }
    ]

    const productList=()=>{
        return product_details.map((details)=>{
            return <ProductLayout image={details.image_of_product} name={details.name_of_product} price={details.price_of_product} id={details.id}/>
        })
    }

    const top_selling=[
        {
            id:3,
            image_of_product:candleCoolBlueberries,
            name_of_product: "Cool Blueberries",
            price_of_product:"9.99" 
        },
        {
            id:4,
            image_of_product:candleJuicyLemon,
            name_of_product: "Juicy Lemon",
            price_of_product:"9.99" 
        },
        {
            id:5,
            image_of_product:candleVedanomsCarrens,
            name_of_product: "Vedanom Carrens",
            price_of_product:"9.99" 
        },
        {
            id:6,
            image_of_product:candleFragrentCinnamon,
            name_of_product: "Frangrent Cinnamon",
            price_of_product:"9.99" 
        }
    ]

    const topSellingList=()=>{
        return top_selling.map((details)=>{
            return <ProductLayout image={details.image_of_product} name={details.name_of_product} price={details.price_of_product} id={details.id}/>
        })
    }
    
    const feedback = [
        {
            id:1,
            image_of_author:authorLuisa,
            name_of_author:"Luisa",
            review_of_author:"I love it! No more air fresheners"
        },
        {
            id:2,
            image_of_author:authorEdoardo,
            name_of_author:"Edoardo",
            review_of_author:"Recommended for everyone",
        },
        {
            id:3,
            image_of_author:authorMart,
            name_of_author:"Mart",
            review_of_author:"Looks very natural, the smell is awesome"
        }
    ]

    const feedbackList=()=>{
        return feedback.map((details)=>{
            return <TestimonialCard name={details.name_of_author} image={details.image_of_author} review={details.review_of_author} id={details.id} />
        })
    }

    return (
        <div className='home'>
           <Layout>
            <div className='card'>

                {/****************text with background image **************/}

                <LazyLoadImage className="background-image" src={bgImage} alt="candles" />

                <div className='transparent-card'>
                    <div className='title'>
                        <p id="title-heading" >The nature candle</p>
                        <p id="title-para" >All handmade with soy wax, Candleaf is a companion for all your pleasure moments.</p>
                    </div>
                    <button className="btn" id="btn-background-image" type='button' ><a href='#title-of-products'>Discover our Collection</a></button>
                    {/* <input className="btn" id="btn-background-image" type="button" onClick={()=>document.getElementById('.products-area').scrollIntoView()}/> */}
                </div>
            </div>

            {/******************Products section******************/}

            <div className='products-area'>
                <div id='title-of-products'>
                    <h3>Products</h3>
                    <p>Order it for you and your beloved ones</p>
                </div>
                
                <div className='product-list'>
                    {productList()}
                </div>
            </div>


            {/***********************  clean and fragrant soy wax section *******************/}

            <div className='benefits'>
                <div className='benefits-section'>
                    <div className='description-section'>
                        <div className='description-header'>
                            <h2>Clean and fragrant soy wax</h2>
                            <p>Made for your home and for your wellness</p>
                        </div>

                        <div className='benefits-points'>
                            <div>
                                <LazyLoadImage src={checkmark} alt='checkmark'/>
                                <p><strong>Eco-sustainable:</strong> All recyclabe materials, 0% CO2 emissions.</p>
                            </div>

                            <div>
                                <LazyLoadImage src={checkmark} alt='checkmark'/>
                                <p><strong>Hyphoallergenic:</strong> 100% natural, human friendly ingredients.</p>
                            </div>

                            <div>
                                <LazyLoadImage src={checkmark} alt='checkmark'/>
                                <p><strong>Handmade</strong> All candles are craftly made with love.</p>
                            </div>

                            <div>
                                <LazyLoadImage src={checkmark} alt='checkmark'/>
                                <p><strong>Long burning:</strong> No more waste. Created for Last Long</p>
                            </div>
                        </div>

                        <button className='btn' >Learn more</button>
                    </div>

                    <div className='image-section'>
                        <LazyLoadImage id="benefits-section-image" src={benefitSectionImage} alt="two-candles" />
                    </div>
                </div>
            </div>

            {/*****************  Testimonial section *****************/}

            <div className='testimonial'>
                <div className='testimonial-section'>
                    <div className='testimonial-description'>
                        <h3>Testimonials</h3>
                        <p>Some quotes from our happy customers</p>
                    </div>

                    <div className='cards-section'>
                        {/* <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/> */}
                        {feedbackList()}
                    </div>
                </div>
            </div>

            {/***************** top selling products section *****************/}

            <div className='popular-section'>
                <div className='popular-area'>
                    <div className='popular-heading'>
                        <h3>Popular</h3>
                        <p>Our top selling products that you may like</p>
                    </div>

                    <div className='product-list'>
                        {topSellingList()}
                    </div>
                </div>
            </div>

        </Layout>
        </div>
    )
}

export default Home;
import "./TestimonialCard.css";
import star from "../assets/images/star.svg"

const TestimonialCard=(props)=>{
    return(
        <div className='testimonial-card'>
            <div className="card-section">
                <img loading="lazy" id="author-image" src={props.image} alt="author-img" />
                <img src={star} id="star" alt="stars" />
                <p id="author-review">{props.review}</p>
                <p id="author-name">{props.name}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;
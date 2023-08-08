import React, { useState } from "react";
import './StarRating.css'
const StarRating: React.FC = () => {
    // const maxRating = 5
    const [currentRating, setCurrentRating] = useState(0)
    const setCurrentRatingClickHandler = (ratingValue: number) => {
        currentRating === ratingValue
            ? setCurrentRating(0)
            : setCurrentRating(ratingValue)
    }

    return (
        <div className={"star-rating-container"}>
            current rating: { currentRating }
            {

               [...Array(5)].map((_, idx) => {
                   const ratingValue  = idx + 1
                   return (
                       <p
                           key={idx}
                           className={` star ${ratingValue <= currentRating ? 'active' : ''} `}
                           onClick={() => setCurrentRatingClickHandler(ratingValue)}
                       >
                           {ratingValue}
                       </p>
                   )})
            }
        </div>
    );
};

export default StarRating;

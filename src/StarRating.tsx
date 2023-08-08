import React, { useState } from "react";
import './StarRating.css'
const StarRating: React.FC = () => {
    // const maxRating = 5
    const [currentRating, setCurrentRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)

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
                           className={` star ${ratingValue <= (hoveredRating || currentRating) ? 'active' : ''} `}
                           onClick={() => setCurrentRatingClickHandler(ratingValue)}
                           onMouseEnter={() => setHoveredRating(ratingValue)}
                           onMouseLeave={() => setHoveredRating(0)}
                       >
                           {ratingValue}
                       </p>
                   )})
            }
        </div>
    );
};

export default StarRating;

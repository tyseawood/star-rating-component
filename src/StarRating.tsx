import React, { useState } from "react";
import './StarRating.css'
const StarRating: React.FC = () => {
    // const maxRating = 5
    const [currentRating, setCurrentRating] = useState(0)

    return (
        <div className={"star-rating-container"}>
            current rating: { currentRating }
            {

               [...Array(5)].map((_, idx) => {
                   const ratingValue  = idx + 1
                   return <p key={idx} onClick={() => setCurrentRating(ratingValue)}> {ratingValue}</p>
               })
            }
        </div>
    );
};

export default StarRating;

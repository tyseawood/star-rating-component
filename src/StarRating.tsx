import React, { useState, useCallback} from "react";
import './StarRating.css'

type StarProps = {
    maxRating: number
}
const StarRating: React.FC<StarProps> = ({maxRating = 5}:{ maxRating: number }) => {
    const [currentRating, setCurrentRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)

    const setCurrentRatingClickHandler = useCallback((ratingValue: number) => {
        currentRating === ratingValue
            ? setCurrentRating(0)
            : setCurrentRating(ratingValue)
    }, [currentRating])

    return (
        <div className={"star-rating-container"}>
            current rating: { currentRating }
            {

               [...Array(maxRating)].map((_, idx) => {
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

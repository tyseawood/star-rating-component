import React, { useState, useCallback, useEffect} from "react";
import './StarRating.css'

interface StarProps {
    maxRating: number
    onChange: (number: number) => void
}
const StarRating: React.FC<StarProps> = ({maxRating = 5, onChange = () => {}}) => {
    const [currentRating, setCurrentRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)

    const setCurrentRatingClickHandler = useCallback((ratingValue: number) => {
        currentRating === ratingValue
            ? setCurrentRating(0)
            : setCurrentRating(ratingValue)
    }, [currentRating])

    useEffect(() => {
        onChange(currentRating)
    }, [currentRating, onChange])

    return (
        <div className={"star-rating-container"}>
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
                           &#9733;
                       </p>
                   )})
            }
        </div>
    );
};

export default StarRating;

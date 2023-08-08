import './StarRating.css'
const StarRating: React.FC = () => {
    // const maxRating = 5

    return (
        <div className={"star-rating-container"}>
            {

               [...Array(5)].map((_, idx) => {
                   const ratingValue  = idx + 1
                   return <p key={idx}> {ratingValue}</p>
               })
            }
        </div>
    );
};

export default StarRating;

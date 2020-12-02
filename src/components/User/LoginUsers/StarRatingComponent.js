import React, {useState} from "react";
import { FaStar} from "react-icons/fa";

//https://www.youtube.com/watch?v=eDw46GYAIDQ

const StarRatingComponent = (props) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const onTrigger = (ratingValue) => {
        props.reivewCallback(ratingValue);
    }

    //console.log("editing: ", props.editing)
    return (
        <div>
            {!props.editing &&
                <div className="rating">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1
                        return <FaStar className="star"
                                       color={ratingValue <= props.stars ? "#ffc107" : "#e4e5e9"}
                                       size={30}/>
                    })}
                </div>
            }
            {props.editing &&
                <div className="rating">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1
                        // console.log("ratingValue: ", ratingValue)
                        // console.log("star inside : ", props.stars)
                        return (
                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}

                                />
                                <FaStar
                                    className="star"
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    size={30}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                    onMouseUp={() => onTrigger(ratingValue)}
                                />

                            </label>
                        );
                    })}

                </div>
            }
        </div>
    )
}

export default StarRatingComponent;




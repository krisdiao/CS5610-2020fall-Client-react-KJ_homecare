import React, {useState} from "react";
import { FaStar} from "react-icons/fa";

//https://www.youtube.com/watch?v=eDw46GYAIDQ

const StarRatingComponent =(stars, editing) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    console.log(stars)

    return (
        <div>
            {!editing &&
                <div className="rating">
                    {[...Array(5)].map((star, index) => {
                        return <FaStar className="star" size={30}/>
                    })}
                    {/*<i className="fa fa-star-o" aria-hidden="true"></i>*/}
                    {/*<i className="fa fa-star" aria-hidden="true"></i>*/}
                    {/*<i className="fa fa-star-half-o" aria-hidden="true"></i>*/}
                </div>
            }
            {editing &&
                <div className="rating">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1
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




import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ onRatingChange, scale }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (ratingValue) => {
    setRating(ratingValue)
    onRatingChange(ratingValue)
  }

  return (
    <div className="flex flex-row">
      {[...Array(scale)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              value={ratingValue}
              type="radio"
              name="rating"
              className="opacity-0 pointer-events-none"
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              size={50}
              className="cursor-pointer mr-4"
              color={ratingValue <= (rating || hover) ? "#ffc107" : "e4e5e9"}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

import React, { useState } from 'react'
import StarRating from './StarRating';

const Question = ({ question, onRatingChange }) => {
  const [userRating, setUserRating] = useState(null)

  return (
    <div className='text-white text-3xl font-bold flex flex-col p-4 justify-center items-center'>
      <p>{question.text}</p>
      {question.type === 'rating' && (
        <StarRating
          rating = {userRating}
          onRatingChange={(rating) => onRatingChange(question.text, rating)}
          scale={question.scale}
        />
      )}
      {question.type === 'text' && (
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your answer here"
          onChange={(e) => onRatingChange(question.text, e.target.value)}
          className="bg-white bg-opacity-50 p-4 rounded-md text-black font-semibold mt-2"
        />
      )}
    </div>
  )
}

export default Question

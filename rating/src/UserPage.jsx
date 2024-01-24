import React, { useState } from "react";
import Question from "./Question";
import ThankYou from "./ThankYou";

const UserPage = ({ questions }) => {
  const [userResponse, setUserResponse] = useState([]);
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleRatingChange = (questionText, rating) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionText]: rating,
    }));
  };

  const handleSubmit = () => {
    console.log(userResponse);
    setUserResponse((prevResponse) => [...prevResponse, responses]);
    setResponses({});
    localStorage.setItem(
      "user-review",
      JSON.stringify([...userResponse, responses])
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleStart = () => {
    setCurrentQuestionIndex(0)
    setShowThankYou(false)
    setUserResponse([])
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div>
      {showThankYou ? (
        <div className="flex flex-col">
          <ThankYou />
          <button onClick={handleStart} className="bg-white text-black py-2 px-4 rounded-md font-bold mt-4">OK</button>
        </div>
      ) : (
        <>
          {currentQuestionIndex < questions.length && (
            <div className="bg-white bg-opacity-20 p-4 rounded-md">
              <Question
                key={questions[currentQuestionIndex].id}
                question={questions[currentQuestionIndex]}
                onRatingChange={handleRatingChange}
              />
              <div className="flex space-x-2">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="bg-gray-600 text-white py-2 px-4 rounded-md font-semibold"
                  >
                    Previous
                  </button>
                )}
                {isLastQuestion ? (
                  <button
                    onClick={() => {
                      handleSubmit();
                      setShowThankYou(true);
                    }}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserPage;

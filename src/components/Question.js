import React, { useState, useEffect } from "react"; // import useEffect

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    // set a timeout that runs every second
    const timer = setTimeout(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);

    // when time runs out, call onAnswered(false)
    if (timeRemaining === 0) {
      onAnswered(false);
    }

    // cleanup function: clear the timeout when component unmounts or updates
    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining, onAnswered]);
  // 🛠 end of useEffect

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;

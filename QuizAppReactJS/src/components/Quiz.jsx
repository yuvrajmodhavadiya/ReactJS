import { useState } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";

export default function Quiz() {
  const questions = [
    {
      question: "What is ReactJS ?",
      options: [
        "CSS Framework",
        "React library",
        "React Framework",
        "Testing Tool"
      ],
      answer: "React library"
    },
    {
      question: "What is 2 + 2",
      options: ["3", "4", "5", "6"],
      answer: "4"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <>
      <div>
        {currentQuestionIndex < questions.length ? (
          <>
            <QuestionList
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              handleClick={handleClick}
              currentAnswer={currentAnswer}
            />
            <button
              disabled={currentAnswer === null}
              className={currentAnswer === "null" ? "button-disable" : "button"}
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          </>
        ) : (
          <div>Your Score is {score}</div>
        )}
      </div>
    </>
  );
}

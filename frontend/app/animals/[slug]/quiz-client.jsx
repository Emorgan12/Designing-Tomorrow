"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function QuizClient({ animal }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selectedAnswer === animal.quiz.answer;
  const hasAnswered = submitted && selectedAnswer;

  const handleSubmit = () => {
    if (selectedAnswer) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="fact-file">
          <div>
            <h2>{animal.name}</h2>
            <Image src={animal.img} alt={animal.name} width={400} height={400} loading="eager" unoptimized />
          </div>

          <p>{animal.description}</p>
        </div>

        <div className="quiz">
          <div className="quiz-content">
            <h3 className="quiz-question">{animal.quiz.question}</h3>
            <div className="quiz-options">
              {animal.quiz.options.map((option) => {
                const isSelected = selectedAnswer === option.letter;
                const isCorrectAnswer = submitted && option.letter === animal.quiz.answer;
                const isWrongSelected = submitted && isSelected && !isCorrect;

                return (
                  <button
                    key={option.letter}
                    onClick={() => !submitted && setSelectedAnswer(option.letter)}
                    className={`quiz-option-button${isSelected && !submitted ? " selected" : ""}${isCorrectAnswer ? " correct" : ""}${isWrongSelected ? " incorrect" : ""}${submitted ? " disabled" : ""}`}
                    disabled={submitted}
                  >
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>{option.letter})</span>
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>

          {hasAnswered && (
            <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "15px", color: isCorrect ? "#155724" : "#721c24" }}>
              {isCorrect ? "✓ Correct!" : "✗ Incorrect. The correct answer is " + animal.quiz.answer}
            </p>
          )}
          {!hasAnswered && (
            <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "15px", visibility: "hidden" }}>
              Placeholder
            </p>
          )}

          <button
            onClick={!submitted ? handleSubmit : handleReset}
            className={`quiz-action-button${!submitted && !selectedAnswer ? " disabled" : ""}`}
            disabled={!submitted && !selectedAnswer}
          >
            {!submitted ? "Submit Answer" : "Try Again"}
          </button>
        </div>

        <button className="button" onClick={() => { setSelectedAnswer(null); setSubmitted(false); window.location.href = "/"; }}>
          Scan New Animal
        </button>
      </div>
    </main>
  );
}

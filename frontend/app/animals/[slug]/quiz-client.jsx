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
            <Image src={animal.img} alt={animal.name} width={400} height={400} />
          </div>

          <p>{animal.description}</p>
        </div>

        <div className="quiz">
          <h3 style={{ fontSize: "1.3rem", margin: "20px 0 16px 0", fontWeight: "600" }}>{animal.quiz.question}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "16px 0", width: "100%" }}>
            {animal.quiz.options.map((option) => (
              <button
                key={option.letter}
                onClick={() => !submitted && setSelectedAnswer(option.letter)}
                style={{
                  padding: "15px 20px",
                  textAlign: "left",
                  border: selectedAnswer === option.letter ? "3px solid #1e90ff" : "2px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: 
                    selectedAnswer === option.letter
                      ? submitted
                        ? isCorrect
                          ? "#d4edda"
                          : "#f8d7da"
                        : "#e3f2fd"
                      : submitted && option.letter === animal.quiz.answer
                      ? "#d4edda"
                      : "#fff",
                  cursor: submitted ? "default" : "pointer",
                  fontWeight: selectedAnswer === option.letter ? "bold" : "normal",
                  fontSize: "16px",
                  transition: "all 0.2s ease",
                  color: submitted && selectedAnswer === option.letter && !isCorrect ? "#721c24" : "inherit",
                }}
                disabled={submitted}
              >
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>{option.letter})</span>
                {option.text}
              </button>
            ))}
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
            style={{ 
              padding: "12px 24px",
              marginTop: "10px",
              marginBottom: "20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: (!submitted && !selectedAnswer) ? "not-allowed" : "pointer",
              opacity: (!submitted && !selectedAnswer) ? 0.5 : 1,
              transition: "all 0.2s ease",
            }}
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

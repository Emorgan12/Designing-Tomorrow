"use client";

import Image from "next/image";
import { useState } from "react";

export default function QuizClient({ animal }) {
  const questions = Array.isArray(animal.quiz.question)
    ? animal.quiz.question.map((question, index) => ({
        question,
        options: animal.quiz.options[index],
        answer: animal.quiz.answer[index],
      }))
    : [animal.quiz];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(() => Array(questions.length).fill(null));
  const [submittedFlags, setSubmittedFlags] = useState(() => Array(questions.length).fill(false));

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentIndex];
  const submitted = submittedFlags[currentIndex];

  const isCorrect = selectedAnswer === currentQuestion.answer;
  const hasAnswered = submitted && selectedAnswer;

  const handleSelect = (letter) => {
    if (submitted) return;
    const next = [...selectedAnswers];
    next[currentIndex] = letter;
    setSelectedAnswers(next);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      const next = [...submittedFlags];
      next[currentIndex] = true;
      setSubmittedFlags(next);
    }
  };

  const handleReset = () => {
    const nextSel = [...selectedAnswers];
    const nextSub = [...submittedFlags];
    nextSel[currentIndex] = null;
    nextSub[currentIndex] = false;
    setSelectedAnswers(nextSel);
    setSubmittedFlags(nextSub);
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setSubmittedFlags(Array(questions.length).fill(false));
  };

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1));

  const score = submittedFlags.reduce((acc, val, idx) => acc + (val && selectedAnswers[idx] === questions[idx].answer ? 1 : 0), 0);
  const finished = submittedFlags.every(Boolean);

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
            <h3 className="quiz-question">{currentQuestion.question}</h3>
            <div className="quiz-options">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.letter;
                const isCorrectAnswer = submitted && option.letter === currentQuestion.answer;
                const isWrongSelected = submitted && isSelected && !isCorrect;
                const optionKey = `${currentIndex}-${option.letter ?? option.text}`;

                return (
                  <button
                    key={optionKey}
                    onClick={() => handleSelect(option.letter)}
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
              {isCorrect ? "✓ Correct!" : "✗ Incorrect. The correct answer is " + currentQuestion.answer}
            </p>
          )}

          {!hasAnswered && (
            <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "15px", visibility: "hidden" }}>
              Placeholder
            </p>
          )}

          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "12px" }}>
            <button
              onClick={!submitted ? handleSubmit : handleReset}
              className={`quiz-action-button${!submitted && !selectedAnswer ? " disabled" : ""}`}
              disabled={!submitted && !selectedAnswer}
            >
              {!submitted ? "Submit Answer" : "Try Again"}
            </button>

            <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              <button onClick={goPrev} className="quiz-nav-button" disabled={currentIndex === 0}>
                Previous
              </button>
              {currentIndex < questions.length - 1 ? (
                <button onClick={goNext} className="quiz-nav-button" disabled={!submitted}>
                  Next
                </button>
              ) : (
                <button onClick={handleRestartQuiz} className="quiz-nav-button" disabled={!finished}>
                  {finished ? `Restart Quiz (Score ${score}/${questions.length})` : "Finish"}
                </button>
              )}
            </div>
          </div>
        </div>

        <button className="button" onClick={() => { handleRestartQuiz(); window.location.href = "/"; }}>
          Scan New Animal
        </button>
      </div>
    </main>
  );
}

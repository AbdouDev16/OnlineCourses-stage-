import React, { useState } from 'react';

const Quiz = ({ questions, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return (score / questions.length) * 100;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Résultats du QCM</h3>
          <p className="text-lg mb-4">
            Votre score : {score.toFixed(1)}%
          </p>
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className={`p-4 rounded-lg ${
                answers[index] === question.correctAnswer
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }`}>
                <p className="font-medium">{question.question}</p>
                <p className="text-sm mt-2">
                  Votre réponse : {answers[index]}
                </p>
                <p className="text-sm mt-1">
                  Réponse correcte : {question.correctAnswer}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-lg mb-6">{question.question}</p>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 
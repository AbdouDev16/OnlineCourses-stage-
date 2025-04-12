import React, { useState } from 'react';
import Quiz from './Quiz';

const ChapterList = ({ chapters }) => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleChapterClick = (chapter) => {
    setActiveChapter(chapter);
    setShowQuiz(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Chapitres du cours</h2>
      <div className="space-y-4">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="border rounded-lg overflow-hidden">
            <button
              className={`w-full p-4 text-left transition-colors duration-200 ${
                activeChapter?.id === chapter.id
                  ? 'bg-blue-50'
                  : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => handleChapterClick(chapter)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {chapter.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{chapter.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{chapter.duration}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeChapter?.id === chapter.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>
            {activeChapter?.id === chapter.id && (
              <div className="p-4 bg-blue-50">
                <div className="prose max-w-none">
                  {chapter.content}
                </div>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setShowQuiz(true)}
                >
                  Passer le QCM du chapitre
                </button>
                {showQuiz && (
                  <Quiz
                    questions={chapter.quiz}
                    onClose={() => setShowQuiz(false)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList; 
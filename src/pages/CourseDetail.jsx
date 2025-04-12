import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ChapterList from '../components/ChapterList';
import { coursesData } from '../data/coursesData';

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Cours non trouvé
          </h2>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Retour à la liste des cours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Retour aux cours
              </Link>
              <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
              <p className="mt-2 text-gray-600">{course.description}</p>
            </div>
            <div className="text-right">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {course.level}
              </span>
              <p className="mt-2 text-gray-600">{course.duration}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover rounded-lg w-full h-64"
              />
            </div>
            <ChapterList chapters={course.chapters} />
          </div>
        </div>

        <div className="mt-8 bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Examen Final
          </h2>
          <p className="text-gray-600 mb-4">
            Une fois que vous aurez terminé tous les chapitres, vous pourrez passer l'examen final
            pour valider vos connaissances.
          </p>
          <Link
            to={`/course/${id}/exam`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Commencer l'examen final
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail; 
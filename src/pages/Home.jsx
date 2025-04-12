import React from 'react';
import CourseList from '../components/CourseList';
import { coursesData } from '../data/coursesData';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blue-600">
            Plateforme de Formation en Informatique
          </h1>
          <p className="mt-2 text-gray-600">
            Découvrez nos cours et développez vos compétences en informatique
          </p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <CourseList courses={coursesData} />
        </div>
      </main>
    </div>
  );
};

export default Home; 
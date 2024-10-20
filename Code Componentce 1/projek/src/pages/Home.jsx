import React from 'react';

import home from '../assets/img/home.svg'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-300 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg flex max-w-4xl w-full">
        <div className="flex-1">
          <img src={home} alt="Descriptive Alt Text" className="rounded-lg shadow-md" />
        </div>
        
        <div className="flex-1 flex flex-col justify-center p-5">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Ngoding</h1>
          <p className="text-lg text-gray-700 mb-8">
            Ngoding adalah sebuah website yang dikhususkan untuk membantu Anda
            mempelajari coding dengan mudah dan efektif. 
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

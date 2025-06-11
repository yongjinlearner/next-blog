'use client';
import React, { useState } from 'react';
import Professional from './components/Professional.jsx'; // Adjust the import path as necessary
import Casual from './components/Casual.jsx'; // Adjust the import path as necessary

export default function Chatbot() {
  const [isProfessional, setIsProfessional] = useState(true);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-between w-[50vw] shadow-2xl shadow-black rounded-lg overflow-hidden bg-gray-800">
        {/* Header */}
        <h1 className="text-3xl font-bold p-4 w-full text-center">
          ChatYJT
        </h1>
        <button
          className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => setIsProfessional(!isProfessional)}
          >Talk to my other persona</button>
      </div>
      <div>
        {isProfessional && <Professional />}
        {!isProfessional && <Casual />}
      </div>
    </div>
  );
}
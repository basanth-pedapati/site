import React from 'react';

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">JavaScript</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">TypeScript</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">React</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">Next.js</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">Node.js</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">MongoDB</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">PostgreSQL</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">Express.js</div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">Tailwind CSS</div>
      </div>
    </section>
  );
} 
import React from 'react';

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 opacity-0 animate-fadeIn bg-background">
      <h1 className="text-3xl font-bold mb-6 text-center text-text-primary">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {['JavaScript','TypeScript','React','Next.js','Node.js','MongoDB','PostgreSQL','Express.js','Tailwind CSS'].map(skill => (
          <div key={skill} className="bg-surface rounded-lg p-4 text-center text-text-primary border border-border transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            {skill}
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-text-secondary">This is dummy content. Add your real skills here!</p>
    </section>
  );
} 
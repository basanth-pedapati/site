import React from 'react';

const dummyProjects = [
  { name: 'Project Alpha', description: 'A dummy project for demonstration.' },
  { name: 'Project Beta', description: 'Another dummy project for the portfolio.' },
  { name: 'Project Gamma', description: 'Showcase your work with this dummy project.' },
  { name: 'Project Delta', description: 'A cool project to add to your list.' },
  { name: 'Project Epsilon', description: 'Impress recruiters with this dummy project.' },
  { name: 'Project Zeta', description: 'A final dummy project for your portfolio.' },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 opacity-0 animate-fadeIn bg-background">
      <h1 className="text-3xl font-bold mb-6 text-center text-text-primary">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {dummyProjects.map((project, idx) => (
          <div key={idx} className="bg-surface rounded-lg shadow p-6 border border-border transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2 text-text-primary">{project.name}</h2>
            <p className="text-text-secondary">{project.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-text-secondary">This is dummy content. Add your real projects here!</p>
    </section>
  );
} 
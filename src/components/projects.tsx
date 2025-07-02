import React from 'react';

const realProjects = [
  { 
    name: 'GITAM Aero Astro', 
    description: 'Full-stack web application with landing page and internal task management dashboard for the aerospace team.', 
    status: 'delivered' 
  },
  { 
    name: 'funcKode', 
    description: 'Developer community platform fostering open source contributions through collaborative group discussions.', 
    status: 'ongoing' 
  },
  { 
    name: 'StellaX Editor', 
    description: 'Web-based IDE development as an open source project for modern development workflows.', 
    status: 'ongoing' 
  },
  { 
    name: 'ProPrent', 
    description: 'Mental healthcare web application focused on accessible therapy and wellness solutions.', 
    status: 'ongoing' 
  },
  { 
    name: 'Mama Mind', 
    description: 'Healthcare industry application providing mental health support and resources for mothers.', 
    status: 'delivered' 
  },
  { 
    name: 'GITAM Aero Astro Hub', 
    description: 'Custom-built task management tool designed from scratch for aerospace project coordination.', 
    status: 'delivered' 
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {realProjects.map((project, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 border border-gray-100 relative">
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'ongoing' 
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                  : 'bg-green-100 text-green-800 border border-green-200'
              }`}>
                {project.status === 'ongoing' ? 'Ongoing' : 'Delivered'}
              </span>
            </div>
            
            <h2 className="text-xl font-semibold mb-2 pr-20">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-gray-500">These are my real projects showcasing full-stack development and collaborative work.</p>
    </section>
  );
} 
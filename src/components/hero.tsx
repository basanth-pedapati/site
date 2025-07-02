import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const projects = [
  {
    name: 'GITAM Aero Astro',
    description: 'Full-stack web application with landing page and internal task management dashboard for the aerospace team.',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    link: '#',
    status: 'delivered',
  },
  {
    name: 'func(Kode)',
    description: 'Developer community platform fostering open source contributions through collaborative group discussions.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    status: 'ongoing',
  },
  {
    name: 'StellaX Editor',
    description: 'Web-based IDE development as an open source project for modern development workflows.',
    stack: ['React', 'TypeScript', 'Monaco Editor'],
    link: '#',
    status: 'ongoing',
  },
  {
    name: 'ProPrent',
    description: 'Mental healthcare web application focused on accessible therapy and wellness solutions.',
    stack: ['React', 'Tailwind CSS', 'Firebase'],
    link: '#',
    status: 'ongoing',
  },
  {
    name: 'Mama Mind',
    description: 'Healthcare industry application providing mental health support and resources for mothers.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    link: '#',
    status: 'delivered',
  },
  {
    name: 'GITAM Aero Astro Hub',
    description: 'Custom-built task management tool designed from scratch for aerospace project coordination.',
    stack: ['React', 'Node.js', 'MySQL'],
    link: '#',
    status: 'delivered',
  },
];

const socialLinks = [
  { icon: <FaGithub size={22} />, url: '#' },
  { icon: <FaLinkedin size={22} />, url: '#' },
  { icon: <FaEnvelope size={22} />, url: '#' },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-2 sm:px-4 py-8 sm:py-12 bg-background opacity-0 animate-fadeIn">
      <div className="flex flex-col gap-4 items-center w-full max-w-md sm:max-w-none">
        <Image
          src="/pfp.svg"
          alt="VVS Basanth Pedapati"
          width={96}
          height={96}
          className="rounded-full border-4 border-primary shadow-md w-24 h-24 sm:w-32 sm:h-32 transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary text-center">VVS Basanth Pedapati</h1>
        <p className="max-w-xs sm:max-w-xl text-base sm:text-lg text-center text-text-secondary">
          Web developer who enjoys building things for the better internet.
        </p>
        <div className="flex gap-4 mt-2">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-transform transition-colors duration-200 hover:text-accent hover:scale-125"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="mailto:vvsbasanth@gmail.com?subject=Hello%20VVS%20Basanth&body=Hi%20VVS%20Basanth,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A%0A"
          className="inline-block px-4 sm:px-6 py-2 mt-4 font-semibold text-white bg-primary rounded-md shadow transition-transform transition-colors duration-150 hover:bg-accent hover:scale-105 text-sm sm:text-base"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-12 sm:mt-16 w-full max-w-5xl">
        <h2 className="mb-6 text-xl sm:text-2xl font-bold text-center text-primary">Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col gap-3 p-4 sm:p-6 bg-surface rounded-lg border border-border shadow min-h-[220px] transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl relative">
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'ongoing' 
                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                    : 'bg-green-100 text-green-800 border border-green-200'
                }`}>
                  {project.status === 'ongoing' ? 'Ongoing' : 'Delivered'}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary pr-20">{project.name}</h3>
              <p className="flex-1 text-xs sm:text-sm text-text-secondary">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="bg-accent/20 text-accent px-2 py-0.5 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs sm:text-sm font-medium text-primary hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

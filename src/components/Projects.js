import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      name: "AWX Automation",
      description: "A Spring application integrated with AWX Tower to automate patch and system-level updates, saving info in MongoDB.",
      tags: ["Spring Boot", "AWX", "MongoDB", "Automation"],
      repoLink: "https://github.com/Srigopinath-A/Awx-Auto-File.git",
    },
    {
      name: "Ecommerce Webapp",
      description: "Developed an Ecommerce backend with remote image storage using Azure Blob Storage and a MySQL database.",
      tags: ["Spring Boot", "MySQL", "Azure Blob", "Backend"],
      repoLink: "https://github.com/Srigopinath-A/Ecommerce-webapp.git",
    },
    {
      name: "Ticket Booking Application",
      description: "A full-stack ticket booking system built to study Spring MVC, Hibernate, and React, resulting in a fully functional app.",
      tags: ["React", "Spring MVC", "Hibernate", "MySQL"],
      repoLink: "https://github.com/Srigopinath-A/Ticketbooking-backend.git",
    },
    {
      name: "Authentication via OAuth2",
      description: "A Spring application for performing authentication with users in Azure Active Directory using the OAuth2 protocol.",
      tags: ["Spring Security", "OAuth2", "Azure AD", "JWT"],
      repoLink: "https://github.com/Srigopinath-A/Spring-App-Oauth2-Validation.git",
    }
  ];

  return (
    // THE CHANGE IS HERE: The `font-sans` class now applies "Phonk Sans" to this entire section.
    <section id="projects" className="bg-neutral-950 text-white py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4">
        {/* This heading correctly uses your separate 'display' font. */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display font-sans tracking-tight">
          My Work & Projects
        </h2>

        {/* --- All text below will now inherit Phonk Sans --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-neutral-900 rounded-lg overflow-hidden
                         border border-neutral-800 shadow-lg
                         transition-all duration-300 hover:border-teal-500 hover:-translate-y-2"
            >
              <div className="p-8 flex-grow flex flex-col">
                {/* This h3 now uses Phonk Sans */}
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {project.name}
                </h3>
                {/* This paragraph now uses Phonk Sans */}
                <p className="text-slate-400 text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                {/* These tags now use Phonk Sans */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-teal-900/60 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* These links now use Phonk Sans */}
                <div className="mt-auto flex items-center gap-6 text-sm">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>View Code</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium text-slate-300 hover:text-teal-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { FaKey } from 'react-icons/fa';

export default function Skills() {
  const SKILLS = [
    {
      category: 'Backend & Databases',
      items: [
        { name: 'Java', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Hibernate', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain-wordmark.svg' },
        { name: 'MySQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Maven', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
      ],
    },
    {
      category: 'Frontend & APIs',
      items: [
        { name: 'React', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Postman', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'OAuth', icon: <FaKey className="w-4 h-4 text-gray-300" /> },
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Git', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { 
          name: 'GitHub', 
          imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          customClass: 'invert',
        },
        { name: 'GitHub Actions', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
        { name: 'Docker', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Docker Compose', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg' },
        { name: 'Azure', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Ansible', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
        { name: 'VS Code', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      ],
    },
    {
      category: 'Testing',
      items: [
        { name: 'JUnit', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-plain.svg' },
        // --- THE FIX IS HERE ---
        // Adding the 'invert' class to make the black logo text visible on a black background.
        { 
          name: 'Mockito', 
          imgSrc: 'https://site.mockito.org/img/logo.svg',
          customClass: 'invert',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-16 md:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 font-display font-sans tracking-tight">
          Technologies & Skills
        </h2>

        <div className="space-y-12">
          {SKILLS.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-bold text-gray-200 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-start gap-x-2 gap-y-3">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-700 transition-colors hover:bg-neutral-800"
                  >
                    {skill.icon ? (
                      skill.icon
                    ) : (
                      <img
                        src={skill.imgSrc}
                        alt={`${skill.name} logo`}
                        className={`w-4 h-4 object-contain ${skill.customClass || ''}`}
                      />
                    )}
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
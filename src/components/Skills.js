import React from 'react';

export default function Skills() {
  const SKILLS = [
    {
      category: 'Programming',
      items: [
        { name: 'Java', badge: 'https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java' },
        { name: 'Spring Boot', badge: 'https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring&logoColor=white' },
        { name: 'Hibernate', badge: 'https://img.shields.io/badge/-Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white' },
        { name: 'MySQL', badge: 'https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql' },
        { name: 'MongoDB', badge: 'https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb' },
        { name: 'Maven', badge: 'https://img.shields.io/badge/-Maven-C71A36?style=flat-square&logo=apache-maven&logoColor=white' },
      ],
    },
    {
      category: 'Web Development',
      items: [
        { name: 'HTML5', badge: 'https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white' },
        { name: 'CSS3', badge: 'https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3' },
        { name: 'Bootstrap', badge: 'https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap' },
        { name: 'React', badge: 'https://img.shields.io/badge/-React-black?style=flat-square&logo=react' },
        { name: 'OAuth2', badge: 'https://img.shields.io/badge/-OAuth2-EB5424?style=flat-square&logo=oauth&logoColor=white' },
        { name: 'Postman', badge: 'https://img.shields.io/badge/-Postman-white?style=flat-square&logo=postman' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', badge: 'https://img.shields.io/badge/-Git-181717?style=flat-square&logo=git' },
        { name: 'GitHub', badge: 'https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github' },
        { name: 'Azure', badge: 'https://img.shields.io/badge/-Azure-0089D6?style=flat-square&logo=microsoft-azure&logoColor=white' },
        { name: 'VS Code', badge: 'https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC' },
        { name: 'AWX', badge: 'https://img.shields.io/badge/-AWX-EE0000?style=flat-square&logo=ansible&logoColor=white' },
        { name: 'JUnit', badge: 'https://img.shields.io/badge/-JUnit-25A162?style=flat-square&logo=junit&logoColor=white' },
        { name: 'Docker', badge: 'https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white' },
        { name: 'Docker Compose', badge: 'https://img.shields.io/badge/-Docker%20Compose-2496ED?style=flat-square&logo=docker&logoColor=white' },
        { name: 'GitHub Actions', badge: 'https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white' },
      ],
    },
  ];

  return (
    <section className="skill-bg py-12 px-4 md:px-8" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-white mb-8">
          Skills
        </h2>

        <div className="space-y-12">
          {SKILLS.map((skillCategory, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl md:text-2xl text-center text-white uppercase tracking-wider">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <img
                      src={skill.badge}
                      alt={skill.name}
                      className="h-7 w-auto mb-1 transition-transform duration-200 ease-in-out transform hover:scale-110 cursor-pointer rounded-md"
                      loading="lazy"
                      aria-label={skill.name}
                    />
                    <span className="text-xs text-gray-300 font-medium">
                      {skill.name}
                    </span>
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

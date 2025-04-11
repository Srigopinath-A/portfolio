import React from "react";

export default function Skills() {
  return (
    <section className="skill-bg py-6 px-4">
      <h1 className="text-white font-Krona+One font-medium text-center text-2xl mb-4">
        Skills
      </h1>

      {/* Programming */}
      <div className="mb-6">
        <h2 className="text-white font-semibold text-lg mb-2">
          Programming:
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <SkillBadge
            image="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring&logoColor=white"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-Maven-C71A36?style=flat-square&logo=apache-maven&logoColor=white"
          />
        </div>
      </div>

      {/* Web Development */}
      <div className="mb-6">
        <h2 className="text-white font-semibold text-lg mb-2">
          Web Development:
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <SkillBadge
            image="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-React-black?style=flat-square&logo=react"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-OAuth2-EB5424?style=flat-square&logo=oauth&logoColor=white"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-Postman-white?style=flat-square&logo=postman"
          />
        </div>
      </div>

      {/* Tools */}
      <div>
        <h2 className="text-white font-semibold text-lg mb-2">
          Tools:
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <SkillBadge
            image="https://img.shields.io/badge/-Git-181717?style=flat-square&logo=git"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-Azure-0089D6?style=flat-square&logo=microsoft-azure&logoColor=white"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC"
          />
          <SkillBadge
            image="https://img.shields.io/badge/-AWX-EE0000?style=flat-square&logo=ansible&logoColor=white"
          />
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ image }) {
  return (
    <img
      src={image}
      alt=""
      className="object-contain"
    />
  );
}
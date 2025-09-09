import React from "react";
import { FaTrophy } from "react-icons/fa";
import { SiSpringboot, SiReact, SiOpenai } from "react-icons/si";

export default function Achievements() {
  const achievements = [
    {
      title: "🏆 Propel Hackathon Winner – Movate",
      description:
        "Secured Winner position in the Propel Hackathon at Movate by building a GreenOps solution to optimize cloud carbon footprint with GenAI.",
      icon: <FaTrophy className="text-yellow-400 w-8 h-8" />,
      technologies: [
        <SiReact key="react" />,
        <SiSpringboot key="spring" />,
        <SiOpenai key="openai" />,
      ],
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-neutral-950 text-white py-10 md:py-14 font-sans"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display tracking-tight font-sans">
          Achievements
        </h2>

        <div className="flex justify-center">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 shadow-lg 
                         transition-all duration-300 hover:border-teal-500 hover:-translate-y-1 
                         flex flex-col items-center text-center max-w-md"
            >
              <div className="flex flex-col items-center gap-3 mb-4">
                {ach.icon}
                <h3 className="text-xl font-semibold text-slate-100">
                  {ach.title}
                </h3>
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-4 text-center">
                {ach.description}
              </p>
              <div className="flex items-center gap-4 text-teal-400 text-2xl">
                {ach.technologies.map((tech, i) => (
                  <span key={i} className="hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

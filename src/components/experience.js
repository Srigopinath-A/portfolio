import React from 'react';

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none" // Key change: a stroke-based icon has no fill by default.
    stroke="currentColor" // Key change: we now color the stroke, not the fill.
    strokeWidth={1.5} // This defines the thickness of the lines.
    className="h-6 w-6 text-teal-400" // The text color now applies to the stroke.
  >
    <path
      strokeLinecap="round" // Makes the line ends rounded and softer.
      strokeLinejoin="round" // Makes the line corners rounded.
      // This is the new SVG path for the outline version.
      d="M20.25 14.15v4.098a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25v-4.098m16.5 0a2.25 2.25 0 0 0-2.25-2.25h-12a2.25 2.25 0 0 0-2.25 2.25m16.5 0v-4.098a2.25 2.25 0 0 0-2.25-2.25h-12a2.25 2.25 0 0 0-2.25 2.25v4.098"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      // This is the separate path for the handle.
      d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Java Developer",
      company: "Movate Technologies",
      duration: "June 2024 - Present",
      description: "Dynamic Junior Full-Stack Java Developer with over a year of experience in creating robust Spring Boot applications and REST APIs, driving efficiency in cloud-based environments. Expertise in Java, Docker, and DevOps tools such as Ansible and GitHub Actions enhances deployment consistency and automation capabilities. Proficient in frontend development using ReactJS, HTML5, and CSS3, alongside test automation with JUnit, ensuring high-quality deliverables.",
      skills: ["Java", "Spring Boot", "REST APIs", "React", "Docker", "Ansible", "JUnit"],
    },
    // You can add more past experiences here in the same format
  ];

  return (
    // Set the section background and default font
    <section id="experience" className="bg-black text-white py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        {/* Main heading uses the elegant 'Playfair Display' font. The redundant font-sans is ok, but removed for clarity. */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display tracking-tight font-sans">
          Work Experience
        </h1>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-neutral-700"></div>

          {experiences.map((exp, index) => (
            // FIXED: Added a unique key prop
            <div key={index} className="relative pl-10 md:pl-0 md:flex items-start">
              {/* Timeline Dot and Icon for Desktop */}
              <div className="hidden md:flex absolute left-1/2 -ml-5 w-10 h-10 bg-neutral-950 rounded-full border-4 border-teal-500 items-center justify-center">
                <BriefcaseIcon />
              </div>
              {/* Timeline Dot and Icon for Mobile (on the left) */}
              <div className="md:hidden absolute left-0 top-1 -ml-1 w-8 h-8 flex items-center justify-center">
                  <div className="w-5 h-5 bg-teal-500 rounded-full"></div>
              </div>

              {/* Card aligned left or right on desktop, full-width on mobile */}
              <div
                className={`w-full md:w-1/2 mb-10 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                }`}
              >
                <div
                  className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 shadow-lg
                             text-left transition-all duration-300 hover:border-teal-500 hover:-translate-y-1"
                >
                  <p className="text-sm font-medium text-slate-400 mb-1">{exp.duration}</p>
                  <h3 className="text-xl font-semibold text-slate-100">{exp.role}</h3>
                  <p className="text-lg font-medium text-teal-400 mb-4">{exp.company}</p>

                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        // FIXED: Added a key and the skill variable to display the text
                        key={i} 
                        className="bg-teal-900/60 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
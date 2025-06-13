import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsDownload } from "react-icons/bs";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Content() {
  // useTypewriter hook remains for the cool animated text
  const [text] = useTypewriter({
    words: ['Srigopinath', 'a Full Stack Developer', 'an Innovator'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section className="relative h-screen flex items-center justify-center font-sans" id="home">
      {/* RESTORED: Your original animated iFrame background */}
      {/* We add -z-10 to ensure it stays behind the content */}
      <div className="absolute inset-0 w-full h-full bg-black -z-10">
        <iframe
          src="https://gifer.com/embed/8mee"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full blur-sm"
          frameBorder="0"
          allowFullScreen
          aria-hidden="true"
          title="Background GIF"
        ></iframe>
        {/* Adds a dark overlay so text is more readable over the GIF */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content Container - All improvements from before are kept */}
      <div className="relative flex flex-col items-center text-center text-white max-w-4xl mx-auto px-4">

        {/* Elegant Name and Animated Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display font-sans tracking-tight text-slate-100">
          Hi, I'm{' '}
          <span className="text-teal-400">{text}</span>
          <Cursor cursorStyle='|' />
        </h1>

        {/* Improved Subtitle / Professional Summary */}
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          A Java Full Stack Developer with over a year of experience building scalable, high-performance applications using Spring Boot, REST APIs, and modern cloud technologies.
        </p>

        {/* Polished Social and Resume Links */}
        <div className="mt-8 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Circular, bordered social links */}
          <a href="https://github.com/Srigopinath-A" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="p-3 rounded-full border-2 border-neutral-700 text-neutral-400 hover:text-white hover:border-teal-400 transition-all duration-300">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/srigopinath-a-2169aa245" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="p-3 rounded-full border-2 border-neutral-700 text-neutral-400 hover:text-white hover:border-teal-400 transition-all duration-300">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:sgopinath1930@gmail.com" aria-label="Email"
             className="p-3 rounded-full border-2 border-neutral-700 text-neutral-400 hover:text-white hover:border-teal-400 transition-all duration-300">
            <SiGmail size={22} />
          </a>
          
          {/* Divider */}
          <div className="h-8 w-px bg-neutral-700 mx-2"></div>
        
          {/* Proper Resume Button */}
          <a
            href="https://drive.google.com/drive/folders/1UoGEETkhIG8_mWVNmb52NNo7JT5ETMNg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-500 text-neutral-900 font-bold text-sm px-6 py-3 rounded-md
                       hover:bg-teal-400 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <BsDownload size={16} />
            <span>My Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
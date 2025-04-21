import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiGmail } from "react-icons/si";

export default function Content() {
  return (
    <section className="relative h-screen" id="Content">
      {/* Background */}
      <div className="absolute bg-black bg-cover inset-0 w-full h-full">
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
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">Hi, I'm Srigopinath</h1>
        <p className="text-center max-w-3xl mt-4 text-lg font-semibold mb-4 font-Krona+One">
          Java Full Stack Developer <br />
          Full-Stack Java Developer with 1+ years of experience building scalable applications using Spring Boot, REST APIs, and modern database technologies (MySQL, MongoDB). Proficient in end-to-end development, automation, and cloud integration. Strong background in designing secure, high-performance systems and integrating DevOps tools like Ansible.
        </p>
        <div className="flex space-x-5 mt-5">
          {/* GitHub Icon */}
          <a
            href="https://github.com/Srigopinath-A"
            className="hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <RxGithubLogo size={35} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/srigopinath-a-2169aa245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-sky-600"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <RxLinkedinLogo size={35} />
          </a>

          {/* Gmail Icon */}
          <a
            href="mailto:sgopinath1930@gmail.com"
            className="hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Srigopinath"
          >
            <SiGmail size={35} />
          </a>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/drive/folders/1UoGEETkhIG8_mWVNmb52NNo7JT5ETMNg"
            className="hover:text-lime-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
          >
            <h1 className="box-border border-2 p-2 text-sm">Click To Download Resume</h1>
          </a>
        </div>
      </div>
    </section>
  );
}
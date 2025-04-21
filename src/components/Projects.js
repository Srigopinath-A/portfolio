export default function Projects() {
  const projects = [
    {
      name: "AWX Automation",
      description:
        "Spring Application Integrated with the AWX Tower to automate patch updates and system-level updates, saving the info in MongoDB.",
      repoLink: "https://github.com/Srigopinath-A/AWX-Automation.git",
    },
    {
      name: "Ecommerce Webapp",
      description:
        "Developed an Ecommerce webapp backend connected with MySQL, storing images using Azure Blob Storage and obtaining them remotely.",
      repoLink: "https://github.com/Srigopinath-A/Ecommerce-webapp.git",
    },
    {
      name: "Ticket Booking Application",
      description:
        "Created a Ticket Booking application to study Spring MVC architecture, MySQL, Hibernate, and React, achieving a fully functional full-stack application.",
      repoLink: "https://github.com/Srigopinath-A/Ticketbooking-backend.git",
    },
    {
      name: "Basic CRUD operations using MySQL and MongoDB",
      description:
        "Created a Spring backend application to study database and Spring concepts, Git version control, and tested using Postman.",
      repoLink: "https://github.com/Srigopinath-A/Mongodb-CRUD-Springboot.git",
    },
    {
      name: "Authentication using OAuth2 with Azure AD",
      description:
        "Created a Spring app to perform authentication with users in Azure AD using OAuth2.",
      repoLink: "https://github.com/Srigopinath-A/Spring-App-Oauth2-Validation.git",
    },
  ];

  return (
    <section className="project-bg pb-5" id="projects">
      <div className="text-3xl md:text-4xl font-medium text-center text-white mb-8">
        <h1>Projects</h1>
      </div>
      <div className="mt-6 px-8 sm:px-60 lg:px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-white mb-6"
          >
            <h2 className="font-bold text-lg mb-2">{project.name}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: "Hiwelinked (July 2022 - March 2024)",
    company: "Bhumaha Solution Pvt Ltd",
    description: "A social-based Alumni Engagement app featuring job portal, event management, and chat features.",
    tech: "Flutter, Firebase, Hive",
    link: "https://play.google.com/store/apps/details?id=com.bhumaha.hiwelinked"
  },
  {
    title: "Siddhi Super App – TATA AIA (Dec 2022 - July 2023)",
    company: "Bhumaha Solution Pvt Ltd",
    description: "Distributor servicing app for TATA AIA agents and partners with modern UI and backend integration.",
    tech: "Flutter, Firebase, Hive",
    link: "https://play.google.com/store/apps/details?id=com.tataaialife"
  },
  {
    title: "NamChat (July 2022 - March 2024)",
    company: "Bhumaha Solution Pvt Ltd",
    description: "Enterprise Business Engagement app to streamline company communications and collaboration.",
    tech: "Flutter, Firebase, Hive",
  },
  {
    title: "iOS App Development (Dec 2009 - Aug 2011)",
    company: "HCL Technologies",
    description: "Developed iOS apps, designed interfaces, and liaised with clients on technical implementation.",
    tech: "Objective-C, Xcode, REST APIs",
  },
  {
    title: "Admin & Job Portal Support (July 2012 – Jan 2017)",
    company: "MAST Contracting, UAE",
    description: "Managed job vacancies, admin tasks, and maintained the company website and records.",
    tech: "Admin Tools, Excel, Web CMS",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Projects & Experience</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <h4>{project.company}</h4>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.tech}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on Play Store
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

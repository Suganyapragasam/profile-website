import React from "react";
import "./App.css";
import profilePic from "./assets/profile-pic.jpg";

function App() {
  const projects = [
    {
      title: "Hiwelinked",
      company: "Bhumaha Solutions Pvt Ltd",
      duration: "July 2022 – Mar 2024",
      description:
        "A social-based alumni engagement platform with job portal, event management, and chat.",
      tech: "Flutter, Firebase, Hive",
      link: "https://play.google.com/store/apps/details?id=com.bhumaha.hiwelinked",
    },
    {
      title: "Siddhi Super App (TATA AIA)",
      company: "Bhumaha Solutions Pvt Ltd",
      duration: "Dec 2022 – Jul 2023",
      description:
        "Distributor servicing app for TATA AIA agents and partners.",
      tech: "Flutter, Firebase, Hive",
      link: "https://play.google.com/store/apps/details?id=com.tataaialife",
    },
    {
      title: "NamChat",
      company: "Bhumaha Solutions Pvt Ltd",
      duration: "Jul 2022 – Mar 2024",
      description:
        "Business engagement platform to improve company communication.",
      tech: "Flutter, Firebase, Hive",
    },
   
   
  ];

  return (
    <div>
      <header>
        <nav className="header-container">
          <div className="left-section">
            <div className="profile-pic">
              <img src={profilePic} alt="Profile" />
            </div>
            <div className="name-designation">
              <h1>Suganya Pragasam</h1>
              <h4>Web Developer | Mobile App Developer | Freelancer</h4>
            </div>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#about">Core Competencies</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="hero">
  <h2>Click below to view or download my complete resume</h2>

  <div className="resume-buttons">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-view"
    >
      View Resume
    </a>
    <a href="/resume.pdf" download className="btn btn-download">
      Download Resume
    </a>
  </div>
</section>


      <section id="about">
        <h2>Core Competencies</h2>
        <ul>
          <li>
            Cross-platform Mobile App Development using{" "}
            <strong>Flutter</strong> & <strong>Dart</strong>
          </li>
          <li>
            State Management with <strong>Provider</strong>,{" "}
            <strong>Riverpod</strong>, and <strong>Bloc</strong>
          </li>
          <li>Clean Architecture implementation for scalable app structure</li>
          <li>Custom Widget Creation and reusable UI components</li>
          <li>Responsive UI Design for both Mobile and Web (Flutter Web)</li>
          <li>
            Integration with RESTful APIs, JSON parsing, and error handling
          </li>
          <li>
            Firebase Services: <strong>Authentication</strong>,{" "}
            <strong>Firestore</strong>, <strong>Realtime Database</strong>,{" "}
            <strong>Cloud Storage</strong>, <strong>Push Notifications</strong>
          </li>
          <li>
            Local Storage using <strong>Hive</strong>,{" "}
            <strong>SharedPreferences</strong>, and <strong>SQLite</strong>
          </li>
          <li>Form validation and user input handling</li>
          <li>
            Version control with <strong>Git</strong> and collaboration using{" "}
            <strong>GitHub</strong>
          </li>
          <li>
            App Deployment to <strong>Google Play Store</strong> &{" "}
            <strong>Apple App Store</strong>
          </li>
          <li>
            Package & dependency management using <strong>pub.dev</strong>
          </li>
          <li>
            Basic knowledge of <strong>CI/CD</strong> and automation using
            GitHub Actions or Firebase
          </li>
          <li>Agile Development & working in collaborative environments</li>
          <li>
            UI/UX Tools: <strong>Figma</strong>, <strong>Adobe XD</strong> for
            prototyping and design references
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>Key Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <h4>
                {project.company}{" "}
                {project.duration && (
                  <span className="duration">• {project.duration}</span>
                )}
              </h4>
              <p>{project.description}</p>
              <p>
                <strong>Tech:</strong> {project.tech}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>If you have any questions or want to collaborate, feel free to reach out!</p>
        <p style={{ marginTop: "1rem" }}>
          📧{" "}
          <a href="mailto:psuganya281@gmail.com">psuganya281@gmail.com</a>
          <br />
          📞 <a href="tel:+971504328094">+971 50 432 8094</a>
          <br />
          💬{" "}
          <a
            href="https://wa.me/971504328094"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Chat
          </a>
          <br />
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/suganya-pragasam-53a771217"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Suganya Pragasam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

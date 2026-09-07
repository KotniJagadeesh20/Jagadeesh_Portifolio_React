import { useRef, useState } from 'react';
import '../Css/My_portifolio.css';
import portrait from '../assets/Images/Image35.jpg';
import resume from '../assets/Images/JagadeeshKotniResume.pdf';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

const skills = {
  Languages: [['fab fa-java', 'Java'], ['fas fa-database', 'SQL'], ['fab fa-js', 'JavaScript']],
  Backend: [['fas fa-leaf', 'Spring Boot'], ['fas fa-leaf', 'Spring MVC'], ['fas fa-shield-halved', 'Spring Security'], ['fas fa-gear', 'REST APIs'], ['fas fa-gem', 'Hibernate'], ['fas fa-database', 'JPA'], ['fas fa-asterisk', 'JWT']],
  Database: [['fas fa-database', 'MySQL']],
  'Cloud & Tools': [['fab fa-aws', 'AWS'], ['fab fa-docker', 'Docker'], ['fab fa-git-alt', 'Git'], ['fab fa-github', 'GitHub']],
  Architecture: [['fas fa-cube', 'Microservices'], ['fas fa-diagram-project', 'System Design'], ['fas fa-layer-group', 'OOP'], ['fas fa-puzzle-piece', 'Design Patterns'], ['fas fa-share-nodes', 'Data Structures'], ['fas fa-triangle-exclamation', 'Algorithms'], ['fas fa-table-cells-large', 'MVC']],
  AI: [['fas fa-brain', 'RAG'], ['fas fa-wand-magic-sparkles', 'MCP']],
};

const services = [
  ['fas fa-code', 'Backend Development', 'Scalable and maintainable backend systems'],
  ['fas fa-gear', 'REST APIs', 'Design and develop robust RESTful APIs'],
  ['fas fa-shield-halved', 'Authentication & Security', 'Secure applications with industry best practices'],
  ['fas fa-microchip', 'AI Integrations', 'Build with RAG, MCP and modern AI tools'],
  ['fas fa-cube', 'Microservices & System Design', 'Modular, scalable architectures'],
  ['fas fa-cloud', 'Cloud & DevOps', 'Deploy and manage applications on AWS with Docker'],
];

const projects = [
  { title: 'Sanchari Travel Hub', visual: 'travel', words: ['Explore', 'Plan', 'Travel'], description: 'A Spring Boot microservices travel marketplace for packages, bus bookings, ride sharing and destination discovery.', tags: ['Java', 'Spring Boot', 'Microservices'], url: 'https://github.com/KotniJagadeesh20/sanchari-travel-platform' },
  { title: 'Learn Creator Kit', visual: 'learn', words: ['Create', 'Share', 'Learn'], description: 'A course marketplace and social learning community for creators and learners.', tags: ['Courses', 'Community', 'Progress tracking'], url: 'https://github.com/KotniJagadeesh20/learner-creator-kit-baackend' },
  { title: 'Job Finder Platform', visual: 'jobs', words: ['Find', 'Apply', 'Build your future'], description: 'Aggregates job listings from multiple sources with automated collection and intelligent search.', tags: ['Job aggregation', 'Automation', 'Search'], url: 'https://github.com/KotniJagadeesh20/Job-Finder' },
];

const MyPortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_5ds46sm', 'template_d7i8y6b', form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => alert('Message sent successfully!'), () => alert('Unable to send your message. Please email me directly.'));
    event.currentTarget.reset();
  };

  return <main>
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Home">JK<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><i className={menuOpen ? 'fas fa-xmark' : 'fas fa-bars'} /></button>
        <nav className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a>
        </nav>
        <a className="resume-link" href={resume} download>Download Resume</a>
      </div>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I&apos;m</p><h1>Kotni Jagadeesh</h1>
        <h2>Software Engineer <span>|</span> Java &amp; Spring Boot Developer</h2>
        <p className="lead">I build backend applications with Java, Spring Boot, and REST APIs.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">View Projects <i className="fas fa-arrow-right" /></a><a className="button secondary" href={resume} download><i className="fas fa-download" /> Download Resume</a></div>
        <div className="socials"><a href="https://github.com/KotniJagadeesh20" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a><a href="https://www.linkedin.com/in/jagadeesh-kotni-194a6b260" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a></div>
      </div>
      <div className="hero-art">
        <div className="dot-field" /><div className="portrait"><img src={portrait} alt="Kotni Jagadeesh smiling" /></div>
        <div className="tech-stack"><div><i className="fas fa-leaf" /><span><b>Spring Boot</b><small>Build. Secure. Scale.</small></span></div><div><i className="fas fa-cube" /><span><b>Microservices</b><small>Modular. Resilient.</small></span></div><div><i className="fab fa-aws" /><span><b>Cloud</b><small>Cloud for what&apos;s next.</small></span></div></div>
      </div>
    </section>

    <section className="about-skills section-shell" id="about">
      <div className="about-copy"><p className="eyebrow">About me</p><h2>Software engineer focused<br />on backend development</h2><p>Software engineer focused on backend development and distributed systems. Building with Java, Spring Boot, MySQL and Spring Security, while expanding my skills in microservices, Docker, AWS and system design.</p><div className="quick-info"><span><i className="fas fa-location-dot" /> Hyderabad, India</span><span><i className="fas fa-comment-dots" /> English, Telugu</span></div></div>
      <div className="skills" id="skills"><p className="eyebrow">Technical skills</p>{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{items.map(([icon, label]) => <span className="pill" key={label}><i className={icon} />{label}</span>)}</div></div>)}</div>
    </section>

    <section className="section-block" id="experience"><div className="section-shell"><p className="eyebrow">Experience</p><h2>My professional journey</h2><div className="timeline">
      <article><time>July 2025 — Present</time><div><h3>Software Engineer — Picktime</h3><ul><li>Develop backend services and REST APIs with Java and Spring Boot.</li><li>Build database-driven applications with MySQL, JPA and Hibernate.</li><li>Debug, test and resolve production issues.</li></ul></div></article>
      <article><time>December 2024 — June 2025</time><div><h3>Software Engineer Intern — Picktime</h3><ul><li>Contributed to Java backend features and bug fixes.</li><li>Worked with Spring Boot and learned engineering workflows.</li></ul></div></article>
    </div></div></section>

    <section className="section-block services"><div className="section-shell"><p className="eyebrow">Services</p><h2>What I Build</h2><div className="service-grid">{services.map(([icon, title, text]) => <article key={title}><i className={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section-block" id="projects"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Projects that turn ideas into products</h2></div><a href="https://github.com/KotniJagadeesh20" target="_blank" rel="noreferrer">View more projects <i className="fas fa-arrow-right" /></a></div><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}><div className={`project-visual ${project.visual}`}><i className={project.visual === 'travel' ? 'fas fa-mountain-sun' : project.visual === 'learn' ? 'fas fa-circle-play' : 'fas fa-magnifying-glass'} /><strong>{project.words.map(word => <span key={word}>{word}</span>)}</strong></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer"><i className="fab fa-github" /> View on GitHub</a></article>)}</div></div></section>

    <section className="section-block education" id="education"><div className="section-shell"><p className="eyebrow">Education</p><h2>My Education</h2><div className="education-grid"><article><i className="fas fa-graduation-cap" /><div><time>2019 – 2023</time><h3>University College of Engineering Narasaraopet</h3><p>CGPA 6.75</p></div></article><article><i className="fas fa-graduation-cap" /><div><time>2018 – 2019</time><h3>Gayatri Junior College</h3><p>CGPA 9.88</p></div></article><article><i className="fas fa-graduation-cap" /><div><time>2016 – 2017</time><h3>Holy-cross English Medium School</h3><p>CGPA 9.5</p></div></article></div></div></section>

    <section className="contact" id="contact"><div className="section-shell contact-grid"><div><p className="eyebrow">Get in touch</p><h2>Let&apos;s build something<br />meaningful</h2><p>I&apos;m always open to discussing new opportunities, interesting projects or just tech in general.</p><a className="email" href="mailto:jagadeeshkotni20@gmail.com"><i className="fas fa-envelope" /> jagadeeshkotni20@gmail.com</a><div className="contact-meta"><span><i className="fas fa-location-dot" /> Hyderabad, India</span><a href="https://github.com/KotniJagadeesh20" aria-label="GitHub"><i className="fab fa-github" /></a><a href="https://www.linkedin.com/in/jagadeesh-kotni-194a6b260" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a></div></div><form ref={form} onSubmit={sendEmail}><div><label>Name<input name="Name" placeholder="Your name" required /></label><label>Email<input type="email" name="Email" placeholder="your.email@example.com" required /></label></div><label>Message<textarea name="Message" placeholder="Tell me about your project or opportunity..." required /></label><button type="submit">Send Message</button></form></div></section>
    <footer><div className="section-shell"><span>© 2026 Kotni Jagadeesh. Built with React.</span><span>Keep learning. Keep building. 🚀</span></div></footer>
  </main>;
};

export default MyPortfolio;

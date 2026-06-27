import React, { useEffect, useRef } from 'react';
import '../Css/My_portifolio.css';
import Image1 from '../assets/Images/Image35.jpg';
import Image2 from '../assets/Images/Image18.jpg';
import Resume from '../assets/Images/JagadeeshKotniResume.pdf';
import Projectimg from '../assets/Images/projectimage.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

const My_Portfolio = () => {
  useEffect(() => {
    const menu = document.querySelector('#menu-bars');
    const header = document.querySelector('header');

    menu.onclick = () => {
      menu.classList.toggle('fa-times');
      header.classList.toggle('active');
    };

    window.onscroll = () => {
      menu.classList.remove('fa-times');
      header.classList.remove('active');
    };

    const cursor1 = document.querySelector('.cursor-1');
    const cursor2 = document.querySelector('.cursor-2');

    window.onmousemove = (e) => {
      cursor1.style.top = `${e.pageY}px`;
      cursor1.style.left = `${e.pageX}px`;
      cursor2.style.top = `${e.pageY}px`;
      cursor2.style.left = `${e.pageX}px`;
    };

    document.querySelectorAll('a').forEach((link) => {
      link.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
      };

      link.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
      };
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5ds46sm',
        'template_d7i8y6b',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent Successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send Email..! Try again');
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="cursor-1"></div>
      <div className="cursor-2"></div>
      <div id="menu-bars" className="fas fa-bars"></div>

      {/* Header section */}
      <header>
        <a href="#" className="logo">
          Kotni<span> Jagadeesh</span>
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="follow">
          <a href="https://www.facebook.com/jagadeesh.kotni.9?mibextid=ZbWKwL" className="fab fa-facebook-f"></a>
          <a href="https://twitter.com/jagadeesh_kotni" className="fab fa-twitter"></a>
          <a href="https://www.instagram.com/jagadeesh_kotni?igsh=NXF5ZGt5OXljaGYw" className="fab fa-instagram"></a>
          <a href="https://www.linkedin.com/in/jagadeesh-kotni-194a6b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="fab fa-linkedin"></a>
        </div>
      </header>

      {/* Home section */}
      <section className="home" id="home">
        <div className="content">
          <span className="hi">Hi there</span>
          <h3>
            I am <span>Kotni Jagadeesh</span>
          </h3>
          <p className="info">Software Engineer | Java &amp; Spring Boot Developer</p>
          <p className="text">
            Seeking excellence in the chosen professional field through self-motivation, hard work and
            utilizing core skills required to effectively deliver the requirements of the position.
          </p>
          <a href="#about" className="btn">
            about me
          </a>
        </div>
        <div className="image">
          <img src={Image1} alt="Jagadeesh image" />
        </div>
      </section>

      {/* About section */}
      <section className="about" id="about">
        <h1 className="heading">
          about<span>me</span>
        </h1>
        <div className="row-1">
          <div className="image">
            <img src={Image2} alt="Jagadeesh image" />
          </div>
          <div className="content">
            <h3>
              My name is Kotni Jagadeesh &amp; I am a Junior Software Engineer specializing in
              Backend Development.
            </h3>
            <p>
              Hi, I'm Kotni Jagadeesh, a Junior Software Engineer with a strong interest in backend
              engineering and distributed systems. I specialize in building scalable applications
              using Java, Spring Boot, REST APIs, MySQL, and Spring Security. I enjoy designing clean
              software architectures, developing secure backend services, and continuously learning
              modern technologies such as Microservices, Docker, AWS, System Design, and CI/CD. I
              believe in writing maintainable, production-ready code and solving real-world problems
              through software. Currently, I am expanding my expertise in cloud technologies and
              large-scale system design while building projects that reflect industry best practices.
            </p>
            <div className="box-container">
              <div className="box">
                <p>
                  <span>Age :</span> 24
                </p>
                <p>
                  <span>Gender :</span> Male
                </p>
                <p>
                  <span>Language :</span> English, Telugu
                </p>
                <p>
                  <span>Work :</span> Software Engineer
                </p>
              </div>
              <div className="box">
                <p>
                  <span>Phone :</span> +91 6303094325
                </p>
                <p>
                  <span>Email :</span> jagadeeshkotni20@gmail.com
                </p>
                <p>
                  <span>Country :</span> India
                </p>
              </div>
            </div>
            <a href={Resume} className="btn" download>
              Download CV
            </a>
            &nbsp;&nbsp;
            <a href="#contact" className="btn">
              Hire me
            </a>
          </div>
        </div>

        <h1 className="heading">
          <span>My</span> Skills
        </h1>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>Java</span>
              <span>SQL</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span>Spring Boot</span>
              <span>Spring MVC</span>
              <span>Spring Security</span>
              <span>REST APIs</span>
              <span>Hibernate</span>
              <span>JPA</span>
              <span>JWT Authentication</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <div className="skill-tags">
              <span>MySQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Cloud &amp; DevOps</h3>
            <div className="skill-tags">
              <span>AWS</span>
              <span>Docker</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Architecture &amp; Concepts</h3>
            <div className="skill-tags">
              <span>Microservices</span>
              <span>System Design</span>
              <span>OOP</span>
              <span>Design Patterns</span>
              <span>Data Structures</span>
              <span>Algorithms</span>
              <span>MVC Architecture</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>AI</h3>
            <div className="skill-tags">
              <span>Rag</span>
              <span>Mcp</span>
            </div>
          </div>
        </div>

       
      </section>

      {/* Experience section */}
      <section className="experience" id="experience">
        <h1 className="heading">
          <span>My</span> Experience
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="content">
              <span>July 2025 - Present</span>
              <h3>Software Engineer</h3>
              <h4>Picktime</h4>
              <p>
                Working as a Software Engineer, developing scalable backend applications and
                enterprise solutions using Java and Spring Boot.
              </p>
              <ul>
                <li>Develop and maintain backend services using Java and Spring Boot.</li>
                <li>Design and implement RESTful APIs for business applications.</li>
                <li>Build database-driven applications using MySQL, JPA, and Hibernate.</li>
                <li>Participate in debugging, testing, and production issue resolution.</li>
                <li>
                  Collaborate with cross-functional teams to deliver new features and product
                  enhancements.
                </li>
                <li>
                  Follow software engineering best practices including code reviews, Git workflows,
                  and clean architecture.
                </li>
              </ul>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <span>December 2024 - June 2025</span>
              <h3>Software Engineer Intern</h3>
              <h4>Picktime</h4>
              <p>
                Started my professional journey as a Software Engineer Intern, contributing to
                backend development while learning enterprise software development practices.
              </p>
              <ul>
                <li>Assisted in backend application development using Java.</li>
                <li>Implemented bug fixes and feature enhancements.</li>
                <li>Worked with Spring Boot-based applications.</li>
                <li>Collaborated with senior engineers to understand software architecture.</li>
                <li>
                  Learned version control, debugging techniques, and development workflows.
                </li>
                <li>
                  Contributed to delivering reliable and maintainable backend features.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="services" id="services">
        <h1 className="heading">
          <span>What</span> I Build
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-server"></i>
            <h3>Backend Development</h3>
            <p>
              Developing scalable backend applications using Java, Spring Boot, Spring MVC, and
              layered architecture with clean, maintainable code.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-network-wired"></i>
            <h3>REST API Development</h3>
            <p>
              Designing and developing secure RESTful APIs with proper validation, exception
              handling, and seamless frontend-backend integration.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-user-shield"></i>
            <h3>Authentication &amp; Security</h3>
            <p>
              Implementing secure authentication and authorization using Spring Security, JWT,
              role-based access control, and password encryption.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-robot"></i>
            <h3>AI Integrations (MCP &amp; RAG)</h3>
            <p>
              Building AI-powered applications using the Model Context Protocol (MCP) and
              Retrieval-Augmented Generation (RAG) to connect intelligent assistants with external
              tools and knowledge sources.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-project-diagram"></i>
            <h3>Microservices &amp; System Design</h3>
            <p>
              Learning and building distributed systems, scalable microservice architectures,
              event-driven applications, and modern backend design patterns.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-cloud"></i>
            <h3>Cloud &amp; DevOps</h3>
            <p>
              Working with AWS, Docker, Git, GitHub, and CI/CD concepts to build, deploy, and
              maintain modern cloud-ready applications.
            </p>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="education" id="education">
        <h1 className="heading">
          <span>My</span> Education
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="content">
              <span>2016-2017</span>
              <h3>Holy-cross English medium school</h3>
              <h3>CGPA : 9.5</h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>2018-2019</span>
              <h3>Gayatri Junior college</h3>
              <h3>CGPA : 9.88</h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>2019-2023</span>
              <h3>University college of Engineering Narasaraopet</h3>
              <h3>CGPA : 6.75</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <section className="portifolio" id="portifolio">
        <h1 className="heading">
          <span>My</span> Portfolio
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={Projectimg} alt="" />
            <h3>Bus Ticket Booking</h3>
            <div className="icons">
              <a href="https://github.com/KotniJagadeesh20/BusTicketBooking.git" target="_blank" rel="noreferrer" className="fas fa-link"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-search"></a>
            </div>
          </div>
          <div className="box">
            <img src={Projectimg} alt="" />
            <h3>RealEstate Application</h3>
            <div className="icons">
              <a href="https://github.com/Prajwal267/realestateapplication.git" target="_blank" rel="noreferrer" className="fas fa-link"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-search"></a>
            </div>
          </div>
          <div className="box">
            <img src={Projectimg} alt="" />
            <h3>Music Player Backend</h3>
            <div className="icons">
              <a href="https://github.com/KotniJagadeesh20/MusicPlayer_Backend.git" target="_blank" rel="noreferrer" className="fas fa-link"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-search"></a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> me
        </h1>
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>My email</h3>
            <p>jagadeeshkotni20@gmail.com</p>
            <p>jagadeeshkotni04@gmail.com</p>
          </div>
          <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>My Phone</h3>
            <p>+91 6303094325</p>
            <p>+91 9347759066</p>
          </div>
          <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>My address</h3>
            <p>Madhapur, Hyderabad, Telangana, India</p>
            <p>India</p>
          </div>
        </div>

        <div className="row">
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
            <input type="text" placeholder="Subject" name="Subject" className="box" />
            <input type="text" placeholder="Name" name="Name" className="box" />
            <input type="email" placeholder="E-mail" name="Email" className="box" />
            <input type="number" placeholder="Number" name="Number" className="box" />
            <textarea placeholder="message" name="Message" cols="30" rows="30"></textarea>
            <input type="submit" className="btn" value="Send Email" />
          </form>
          <iframe
  className="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.884486918967!2d78.37104605226682!3d17.44843599072246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1782556916109!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  title="Madhapur, Hyderabad Location"
></iframe>
        </div>
      </section>
    </div>
  );
};

export default My_Portfolio;

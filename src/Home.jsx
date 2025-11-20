import React, { useEffect } from 'react';
import './Styles/home.css';
import { FiExternalLink } from 'react-icons/fi';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100, 
    });
    AOS.refresh();      // refresh AOS after elements are rendered
  }, []);

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1 className="home-title">Charles Hume</h1>
        <p className="home-subtitle">Software Engineer, Data Scientist, Machine Learning Engineer, Game Developer</p>
      </header>

      {/* About Me Section */}
      <div className="about-container">
        <section className="about-section" data-aos="fade-right">
          <h2>About Me</h2>
          <p>
            I recently graduated from Villanova University with a bachelor’s degree, double majoring in Computer Science and Mathematics. I am passionate 
            about building meaningful, impactful technology—whether that means developing scalable software, modeling data-driven insights, or creating 
            intelligent systems with machine learning.
          </p>
          <p>
            Across my academic and personal projects, I’ve worked on everything from predictive models and 
            full-stack applications to 3D modeling and creating video games. I love tackling complex problems, learning new tools, and turning 
            ideas into real, working products.
          </p>
          <p>
            I’m currently seeking full-time opportunities as a Software Engineer, Data Scientist, Machine Learning 
            Engineer, or Game Developer. If you’re looking for someone who brings curiosity, strong analytical skills, and a genuine enthusiasm for 
            building great things—I’d love to connect.
          </p>
          <p>
              <a href="pdfs/Resume.pdf" target="_blank" rel="noopener noreferrer" className="project-link">
              View My Resume
              </a>
            </p>
        </section>

        <div className="profile-frame" data-aos="fade-left">
          <img src="photos/Headshot2.png" alt="Charlie Hume" />
        </div>
      </div>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 data-aos="fade-up">My Work</h2>
        <div className="projects-list">
          {/* Project 1 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="0">
            <h3>
                <img src="photos/SCLogo.png" style={{ width: '7%', height: '7%', marginRight: '2%', verticalAlign: 'middle'}}></img>
                <span style={{ verticalAlign: 'middle' }}>Social Connect</span>
                <a href="https://github.com/CSC4700-Spring2024-Org/csc4700-team-project-socialconnect" target="_blank" rel="noopener noreferrer" className="external-link">
                    <FiExternalLink/>
                </a>
            </h3>
            <p>
                A year ago we noticed a problem that content creators were currently facing. With the emergence of short from content, creators were wasting 
                time having to post and view post performance from multiple applications. Our solution was the birth of Social Connect, a social media dashboard 
                that allows users to see all their content in one place. Social Connect leverages social media APIs to allow for seamless integration with 
                Instagram, TikTok, and YouTube. Our site was built using React, Spring Boot, and a MySQL database, and was hosted on AWS.
            </p>
            {/* <video width="640" height="360" controls className="demo-video"> */}
            <video width="95%" height="40%" controls className="demo-video" autoPlay loop muted>
                <source src="videos/SCdemo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
          </div>

          {/* Project 2 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="150">
            <h3>Clutch Factor - A new way to measure how NFL quarterbacks perform under pressure</h3>
            <p>
                For my Mathematics Capstone Project, my classmate and I set out to design a new way to measure "clutch ability" in NFL quarterbacks. We defined clutch ability 
                as how much a quarterback increases or decreases his typical performance as the clock winds down and the game is on the line. In order to measure quarterback 
                performance in a modern and accurate way, we developed a metric called QPI (Quarterback Performance Index) to replace the outdated and 
                highly flawed Passer Rating metric. We accomplished this using multiple linear regression on a number of key variables, and using the pseudo-inverse (Moore-Penrose 
                inverse) to solve our matrix. Then, using our QPI metric, we were able to create our Clutch Factor formula, which compares quarterback performance in the fourth 
                quarter within one score to quarterback performance in the first three quarters. Our results were fascinating.
            </p>
            <img src='photos/QPI Visual.png' width="95%" height="60%" className="demo-video"></img>
            <img src='photos/CF 2023 QB Ranking.png' width="95%" height="60%" className="demo-video"></img>
            <p>
              <a href="pdfs/ClutchFactor.pdf" target="_blank" rel="noopener noreferrer" className="project-link">
              View PDF
              </a>
            </p>
          </div>
          {/* Project 3 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <h3>
                <span style={{ verticalAlign: 'middle' }}>Unity Project: Villanova Survival</span>
            </h3>
            <p>
                I spearheaded a team of four developers to create a zombie FPS survival game set on my college campus in 
                an apocalyptic world using Unity. We used Google Earth tools paired with Blender to create the perfect 
                recreation of Villanova's campus. All of our code was written in C#.
            </p>
            <img src='photos/VillanovaMapZoomedOut.png' width="95%" height="60%" className="demo-video">
            </img>
            <video width="95%" height="60%" controls className="demo-video" autoPlay loop muted style={{marginTop: "5%"}}>
                <source src="videos/VillanovaSurvivalDemo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
          </div>
          {/* Project 4 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="450">
            <h3>
                <span style={{ verticalAlign: 'middle' }}>Tiger 3D Model Using Blender</span>
            </h3>
            <p>
                I sculpted this photo-realistic tiger from scratch using Blender. Over the course of two months I watched countless YouTube tutorials which taught me prefessional 
                3D modeling techniques. After dozens of hours of sculpting, I finished my model and learned how to retopologize to improve performance and allow me to animate 
                the tiger.
            </p>
            {/* <video width="640" height="360" controls className="demo-video"> */}
            <video width="95%" height="60%" controls className="demo-video" autoPlay loop muted style={{marginTop: "5%"}}>
                <source src="videos/model.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <h4>
              Retopology
            </h4>
            <img src='photos/Retopology.png' width="95%" height="60%" className="demo-video">
            </img>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="100">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
        <div className="contact-links">
          <a href="mailto:charliehume0806@gmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/charles-hume-477317269/" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Charlie Hume. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

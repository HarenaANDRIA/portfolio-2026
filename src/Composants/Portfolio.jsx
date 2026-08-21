import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

import menu_open from '../assets/bars-solid.svg';
import menu_close from '../assets/xmark-solid.svg';
import cv1 from '../assets/Harena.png';
import cv from '../assets/CV_Harena.pdf';
import mywork_data from '../assets/mywork_data';
import mail_icon from '../assets/envelope-solid.svg';
import facebook_icon from '../assets/square-facebook-brands-solid.svg';
import linkedin_icon from '../assets/linkedin-brands-solid.svg';
import phone_icon from '../assets/phone-solid.svg';

function FadeInOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.15 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => { menuRef.current.style.right = "0"; };
  const closeMenu = () => { menuRef.current.style.right = "-350px"; };

  const scrollToSection = (e, id, duration = 1200) => {
    e.preventDefault();
    closeMenu();
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Accueil</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Moi</a></li>
        <li><a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Mes projets</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contactez-moi</a></li>
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <div id='home' className='hero'>
      <FadeInOnScroll>
        <h1 style={{ textAlign: 'center' }}>Bienvenue,</h1>
      </FadeInOnScroll>
      <div className="hero-content">
        <img src={cv1} alt="Harena - Développeur Fullstack & IA" />
        <div className="hero-text">
          <p>
            Je suis <span>Harena Andriantovosoa</span>, Je construis des applications web intelligentes qui transforment les données en décisions.
          </p>
          <p>
            Développeur IA, Machine Learning et Full-Stack, je combine l'analyse de données, l'algorithmie et le développement logiciel pour créer des solutions utiles, performantes et orientées utilisateur.
          </p>
          <p>
            Mon objectif ? Rendre l'intelligence artificielle concrète, accessible et parfaitement intégrée dans des solutions fiables et intuitives.
          </p>
        </div>
      </div>
      <div className="hero-action">
        <div className="hero-cv">
          <a href={cv} target="_blank" rel="noopener noreferrer">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const aboutRef = useRef(null);

  const skillsData = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 70 },
    { name: "Angular", percentage: 80 },
    { name: "React", percentage: 70 },
    { name: "Java", percentage: 70 },
    { name: "Python", percentage: 75 },
    { name: "PHP", percentage: 60 },
    { name: "CodeIgniter", percentage: 75 },
    { name: "C Sharp", percentage: 50 },
    { name: "PostgreSQL", percentage: 70 },
    { name: "Office", percentage: 90 },
    { name: "Laravel", percentage: 65 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsData.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [skill.name]: true
                }));
              }, index * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div id='about' className='about' ref={aboutRef}>
      <FadeInOnScroll>
        <div className="about-title">
          <h1>À propos</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <div className="about-para">
              <p>Je possède une solide maîtrise des principaux langages de programmation et technologies web, frameworks et outils modernes. En tant que développeur full-stack et en intelligence artificielle, mon apprentissage continu m'apporte une compréhension approfondie des concepts et pratiques.</p>
              <p>En dehors de la programmation, je maîtrise aussi plusieurs outils informatiques indispensables à la conception d'applications et à l'analyse de données.</p>
            </div>
            <div className="about-achievements">
              <div className='about-achievement'>
                <h1>3 ANS</h1>
                <p>Expérience académique</p>
              </div>
              <div className='about-achievement'>
                <h1>6 MOIS</h1>
                <p>Expérience pro (Stage)</p>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="about-skills">
              {skillsData.map((skill) => (
                <div key={skill.name} className="about-skill">
                  <div className="about-skill-header">
                    <p>{skill.name}</p>
                    <span className="about-skill-percentage">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="about-skill-bar-container">
                    <div 
                      className="about-skill-bar"
                      style={{ 
                        width: animatedSkills[skill.name] ? `${skill.percentage}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

function MyWork() {
  return (
    <div id='work' className='mywork'>
      <FadeInOnScroll>
        <div className="mywork-title">
          <h1>Mes projets</h1>
        </div>
        <div className="mywork-intro">
          <p>Une sélection de projets personnels, académiques et applicatifs.</p>
        </div>
        <div className="mywork-container">
          {mywork_data.map((work, index) => (
            <div key={index} className="work-item">
              <img src={work.w_img} alt={work.w_name || `Projet ${index + 1}`} />
              {work.w_name && <h3>{work.w_name}</h3>}
              {work.w_description && <p>{work.w_description}</p>}
            </div>
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
}

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);
    formData.append("access_key", "224d31bf-6a5c-46ee-ac9b-0984ee2b853a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès !");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <FadeInOnScroll>
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="contact-intro">
          <p>Un projet en tête ? N'hésitez pas à me contacter directement.</p>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <div className="contact-info">
              <div className="contact-icon"><img src={facebook_icon} alt="Facebook" /></div>
              <div className="contact-info-content">
                <label>Facebook</label>
                <a href="https://facebook.com/HarenaAndria" target="_blank" rel="noopener noreferrer" className="contact-social-link">Harena Andria</a>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon"><img src={mail_icon} alt="Email" /></div>
              <div className="contact-info-content">
                <label>Email</label>
                <a href="mailto:handriantovosoa@gmail.com" className="contact-social-link">handriantovosoa@gmail.com</a>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon"><img src={phone_icon} alt="Téléphone" /></div>
              <div className="contact-info-content">
                <label>Téléphone</label>
                <a href="tel:+261349496465" className="contact-social-link">+261 34 94 964 65</a>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon"><img src={linkedin_icon} alt="LinkedIn" /></div>
              <div className="contact-info-content">
                <label>LinkedIn</label>
                <a href="https://linkedin.com/in/harena" target="_blank" rel="noopener noreferrer" className="contact-social-link">Harena</a>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="nom">Nom</label>
            <input type="text" placeholder='Votre nom...' name='nom' id='nom' required />
            
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Votre email...' name='email' id='email' required />
            
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" placeholder='Votre message...' required></textarea>
            
            <button type="submit" className="contact-submit">Envoyer le message</button>
            {result && <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{result}</p>}
          </form>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
    </div>
  );
}
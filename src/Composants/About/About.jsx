import React, { useState, useEffect, useRef } from 'react'
import './About.css'

function About() {
    const [animatedSkills, setAnimatedSkills] = useState({});
    const aboutRef = useRef(null);

    const skillsData = [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 70 },
        { name: "Angular", percentage: 85 },
        { name: "React", percentage: 50 },
        { name: "Java", percentage: 70 },
        { name: "Python", percentage: 75 },
        { name: "PHP", percentage: 60 },
        { name: "CodeIgniter", percentage: 75 },
        { name: "C Sharp", percentage: 65 },
        { name: "PostgreSQL", percentage: 70 },
        { name: "Office", percentage: 90 }
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
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div id='about' className='about' ref={aboutRef}>
            <div className="about-title">
                <h1>À propos</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <div className="about-para">
                        <p>Je possède une solide maîtrise des principaux langages de programmation et technologies web, frameworks et outils modernes. En tant que développeur full-stack et en intelligence artificielle. Mon niveau d'auto-éducation couvre cette production à une compréhension approfondie des concepts et pratiques. Je m'engage à créer des solutions web et IA toujours avec une attention portée à la qualité, à la performance et aux bonnes pratiques.</p>
                        <p>En dehors de la programmation, je maîtrise aussi quelques outils informatiques, qui sont souvent utiles dans la conception d'une application et l'analyse de données.</p>
                    </div>
                    <div className="about-achievements">
                        <div className='about-achievement'>
                            <h1>3 années</h1>
                            <p>d'expérience académique</p>
                        </div>
                        <div className='about-achievement'>
                            <h1>6 mois</h1>
                            <p>d'expérience professionnelle (Stage)</p>
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-skills">
                        {skillsData.map((skill) => (
                            <div 
                                key={skill.name} 
                                className={`about-skill ${animatedSkills[skill.name] ? 'animated' : ''}`}
                            >
                                <p>{skill.name}</p>
                                <div className="about-skill-bar-container">
                                    <div 
                                        className="about-skill-bar"
                                        style={{ 
                                            width: animatedSkills[skill.name] ? `${skill.percentage}%` : '0%'
                                        }}
                                    >
                                        <span className="about-skill-percentage">
                                            {skill.percentage}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
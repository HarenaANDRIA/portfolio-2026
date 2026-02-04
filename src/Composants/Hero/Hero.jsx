import React from 'react'
import './Hero.css'
import cv1 from '../../assets/Harena.png'
import cv from '../../assets/CV_Harena.pdf'

function Hero() {
  return (
    <div id='home' className='hero'>
        <h1>Bienvenue,</h1>
        <div className="hero-content">
            <img src={cv1} alt="Harena - Développeur Fullstack & IA"/>
            <div className="hero-text">
                <p>Je suis <span>Harena Andriantovosoa</span>, Je construis des applications web intelligentes qui 
transforment les données en décisions.
</p>
                <p>Développeur IA, Machine Learning et Full-Stack, je combine 
l’analyse de données, l’algorithmie et le développement logiciel 
pour créer des solutions utiles, performantes et orientées 
utilisateur.
</p>
                <p>Mon objectif ? Rendre l'intelligence artificielle concrète, accessible et parfaitement intégrée dans des solutions fiables et intuitives.</p>
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
  )
}

export default Hero
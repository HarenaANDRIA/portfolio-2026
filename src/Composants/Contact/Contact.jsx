import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/envelope-solid.svg'
import facebook_icon from '../../assets/square-facebook-brands-solid.svg'
import linkedin_icon from '../../assets/linkedin-brands-solid.svg'
import phone_icon from '../../assets/phone-solid.svg'
import {useState} from 'react'

function Contact() {

    const [result, setResult] = React.useState("");

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
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Discutons-nous</h1>
        </div>
        <div className="contact-intro">
            <p>Je suis ouvert à des offres de projets, n'hésitez pas à me contacter.</p>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <div className="contact-info">
                    <div className="contact-icon">
                        <img src={facebook_icon} alt="Facebook" />
                    </div>
                    <div className="contact-info-content">
                        <label>Facebook</label>
                        <a 
                            href="https://facebook.com/HarenaAndria" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-social-link"
                        >
                            <span className="contact-value">Harena Andria</span>
                        </a>
                    </div>
                </div>
                
                <div className="contact-info">
                    <div className="contact-icon">
                        <img src={mail_icon} alt="Email" />
                    </div>
                    <div className="contact-info-content">
                        <label>Email</label>
                        <a 
                            href="mailto:handriantovosoa@gmail.com" 
                            className="contact-social-link"
                        >
                            <span className="contact-value">handriantovosoa@gmail.com</span>
                        </a>
                    </div>
                </div>
                
                <div className="contact-info">
                    <div className="contact-icon">
                        <img src={phone_icon} alt="Téléphone" />
                    </div>
                    <div className="contact-info-content">
                        <label>Téléphone</label>
                        <a 
                            href="tel:+261349496465" 
                            className="contact-social-link"
                        >
                            <span className="contact-value">+261 34 94 964 65</span>
                        </a>
                    </div>
                </div>
                
                <div className="contact-info">
                    <div className="contact-icon">
                        <img src={linkedin_icon} alt="LinkedIn" />
                    </div>
                    <div className="contact-info-content">
                        <label>LinkedIn</label>
                        <a 
                            href="https://linkedin.com/in/harena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-social-link"
                        >
                            <span className="contact-value">Harena</span>
                        </a>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="nom">Nom :</label>
                <input type="text" placeholder='Entrez votre nom...' name='nom' id='nom' required/>
                
                <label htmlFor="email">Email :</label>
                <input type="email" placeholder='Entrez votre email...' name='email' id='email' required/>
                
                <label htmlFor="message">M'écrire un message :</label>
                <textarea name="message" id="message" rows="8" placeholder='Entrez votre message...' required></textarea>
                
                <button type="submit" className="contact-submit">Envoyer</button>
                
                {result && <p className="form-result">{result}</p>}
            </form>
        </div>
    </div>
  )
}

export default Contact
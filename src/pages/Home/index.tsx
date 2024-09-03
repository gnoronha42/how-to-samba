import React  from 'react';
import { useTranslation } from 'react-i18next';
import {  FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import NavBar from '../../components/navBar';
import './style.css';
import { Link } from 'react-router-dom';
import { useBackgroundImage } from '../../hooks/backgroundImage';

const Home: React.FC = () => {
    const { t, i18n } = useTranslation();
    const {backgroundImage} = useBackgroundImage()

    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <NavBar />

            <section id="why-we-do">
                <h2>{t('why_we_do')}</h2>
                <p>{t('your_manifesto_here')}</p>
                <Link to="/new-members" className="cta-button">{t('join_us')}</Link>
            </section>

            <section id="things-we-do">
                <h2>{t('the_things_we_do')}</h2>
                <p>{t('things_we_do_description')}</p>
                <a href="#house-of-creativity" className="cta-button">{t('house_of_creativity')}</a>
            </section>

            <section id="portfolio">
                <h2>{t('says_a_lot')}</h2>
                <p>{t('portfolio_description')}</p>
                <Link to="/portfolio" className="cta-button">{t('portfolio')}</Link>
            </section>

            <section id="about-us">
                <h2>{t('about_us')}</h2>
                <p>{t('about_us_description')}</p>
                <Link to="/" className="cta-button">{t('follow_us')}</Link>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} />
                    </a>
                    <a href="https://substack.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="mailto:your-email@example.com">
                        <FaEnvelope size={30} />
                    </a>
                </div>

                <p className="contact-email">hello2samba@gmail.com</p>
            </section>


   
        </div>
        
    );
}

export default Home;
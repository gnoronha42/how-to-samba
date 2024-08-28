import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { participants } from './mockData';
import { useTranslation } from 'react-i18next';
import { FaFlagUsa, FaFlag, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import NavBar from '../../components/navBar';
import './style.css';
import {
    IMG_6066,
    IMG_6114,
    IMG_6115,
    IMG_6133,
    IMG_6157,
    IMG_6192,
    IMG_6193,
    IMG_6219,
    IMG_6334,
    IMG_6435,
    IMG_6436,
    IMG_6457,
    IMG_6624,
    IMG_6646,
    IMG_6649,
} from '../../assets/';
import { Link } from 'react-router-dom';
import { Bubble } from '../../components/Bubble';



const Home = () => {
    const { t, i18n } = useTranslation();
    const images = [
        IMG_6066,
        IMG_6114,
        IMG_6115,
        IMG_6133,
        IMG_6157,
        IMG_6192,
        IMG_6193,
        IMG_6219,
        IMG_6334,
        IMG_6435,
        IMG_6436,
        IMG_6457,
        IMG_6624,
        IMG_6646,
        IMG_6649,
    ];
    const [backgroundImage, setBackgroundImage] = useState(images[0]);
    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    }, []);

    // const years = [
    //     { year: 2016, achievement: t('first_major_project_completed') },
    //     { year: 2017, achievement: t('expanded_to_new_markets') },
    //     { year: 2018, achievement: t('launched_new_product_line') },
    //     { year: 2019, achievement: t('reached_1_million_users') },
    //     { year: 2020, achievement: t('opened_new_headquarters') },
    //     { year: 2021, achievement: t('awarded_industry_recognition') },
    //     { year: 2022, achievement: t('implemented_ai_solutions') },
    //     { year: 2023, achievement: t('achieved_carbon_neutrality') },
    //     { year: 2024, achievement: t('future_goals_and_plans') },
    // ];

    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <NavBar />

            <section id="why-we-do">
                <h2>Why We Do</h2>
                <p>Your manifesto here (to be defined).</p>
                <Link to="/newMembers" className="cta-button">Join Us</Link>
            </section>

            <section id="things-we-do">
                <h2>The Things We Do</h2>
                <p>
                    Through various formats, we've built lasting relationships. As we face 2024’s technological shifts
                    that have transformed the translation world, our dream of a more harmonious globe remains
                    strong. We’ve adapted to keep thriving.



                    Welcome to our creative samba, a collective of global minded brazilian, building globally and
                    acting local.</p>
                <a href="#house-of-creativity" className="cta-button">House of Creativity</a>
            </section>

            <section id="portfolio">
                <h2>Says A Lot</h2>
                <p>Since 2015, we've been sharing Brazil's bright side online.
                    What started as a passion for our culture soon grew into
                    a service guiding foreigners. By 2016, we became a
                    bilingual bridge between cultures, partnering with diverse
                    projects to foster global connections.</p>
                <Link to="/newMembers" className="cta-button">Portfolio</Link>
            </section>

            <section id="about-us">
                <h2>About Us</h2>
                <p>why we do the things we do says a lot about us.

                    <strong>
                    #thinkGlobal #actLocal

                    </strong>    a digital collective of creative brazilians come together to potencialize
                    human creativity towards a more harmonious global scenario.

                    Together (with ai) theres little we cant samba through.</p>
                <Link to="/newMembers" className="cta-button">Follow Us</Link>
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

                {/* Email abaixo dos ícones */}
                <p className="contact-email">hello2samba@gmail.com</p>
            </section>


            {/* <div className="participants-container">
                {participants.map((participant, index) => (
                    <div key={index} className="participant">
                        <img src={participant.image} alt={participant.name} className="participant-image" />
                        <div className="participant-info">
                            <h3 className="participant-name">{participant.name}</h3>
                            <h4 className="participant-role">{participant.role}</h4>
                            <p className="participant-description">{participant.description}</p>
                        </div>
                    </div>
                ))}
            </div> */}

        </div>
    );
}

export default Home;
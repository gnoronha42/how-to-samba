import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { participants } from './mockData';
import { useTranslation } from 'react-i18next';
import { FaFlagUsa, FaFlag } from 'react-icons/fa';
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

  


    const years = [
        { year: 2016, achievement: t('first_major_project_completed') },
        { year: 2017, achievement: t('expanded_to_new_markets') },
        { year: 2018, achievement: t('launched_new_product_line') },
        { year: 2019, achievement: t('reached_1_million_users') },
        { year: 2020, achievement: t('opened_new_headquarters') },
        { year: 2021, achievement: t('awarded_industry_recognition') },
        { year: 2022, achievement: t('implemented_ai_solutions') },
        { year: 2023, achievement: t('achieved_carbon_neutrality') },
        { year: 2024, achievement: t('future_goals_and_plans') },
    ];

    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* <NavBar /> */}


            <h1 className="title">{t('how_to_samba')}</h1>
            <div className="cards-container">
                <div className="card">
                    <p>{t('brazil_abundant_resources')}</p>
                    <p>{t('brazil_culture_miscellaneous')}</p>
                </div>
            </div>

            {/* <div className="timeline">
                {years.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-point"></div>
                        <div className="timeline-achievement">{item.achievement}</div>
                    </div>
                ))}
            </div> */}

            <div className="participants-container">
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
            </div>

        </div>
    );
}

export default Home;
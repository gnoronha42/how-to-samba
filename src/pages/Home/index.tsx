import { Menu, Dropdown, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFlagUsa, FaFlag } from 'react-icons/fa'
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
    gabriel,
    mari,
    maria,
} from '../../assets/';

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

    const languageMenu = (
              <Menu>
            <Menu.Item key="en" onClick={() => changeLanguage('en')}>
                <FaFlagUsa style={{ marginRight: 8 }} /> English
            </Menu.Item>
            <Menu.Item key="pt" onClick={() => changeLanguage('pt')}>
                <FaFlag style={{ marginRight: 8 }} /> Português
            </Menu.Item>
        </Menu>
    );


    const items = [
        { key: '1', label: t('why_we_do') },
        { key: '2', label: t('the_things_we_do') },
        { key: '3', label: t('about_us') },
        { key: '4', label: <Dropdown overlay={languageMenu}  className="language-switch">
        <Button>{t('language')}</Button>
    </Dropdown>}
    ];

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    }, []);

    const handleMenuClick = () => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    };

  

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };


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

    const participants = [
        {
            name: 'Maria Eduarda',
            role: 'Community Manager',
            description: 'na How to Samba, organizando os criativos e otimizando a gestão de recursos.',
            image: maria, 
        },
        {
            name: 'Mariana Franco',
            role: 'CEO',
            description: 'Sua visão globalista e domínio permite que ela atue como intérprete de conferências e facilitadora em distintos mercados.',
            image: mari, 
        },
        {
            name: 'Gabriel Ximenes',
            role: 'Guest Developer',
            description: 'Desenvolvedor Fullstack com experiencia em varios projetos.',
            image: gabriel, 
        },
    ];

    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Menu
                theme="dark"
                mode="horizontal"
                className='custom-menu'
                defaultSelectedKeys={['2']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
                onClick={handleMenuClick}
            />
          

            <h1 className="title">{t('how_to_samba')}</h1> 
            <div className="cards-container">
                <div className="card" >
                    <p>{t('brazil_abundant_resources')}</p>
                    <p>{t('brazil_culture_miscellaneous')}</p>
                </div>
            </div>

            <div className="timeline">
                {years.map((item, index) => (
                    <div key={index} className="timeline-item" >
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-point"></div>
                        <div className="timeline-achievement">{item.achievement}</div>
                    </div>
                ))}
            </div>

            <div className="participants-container">
                {participants.map((participant, index) => (
                    <div key={index} className="participant" >
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
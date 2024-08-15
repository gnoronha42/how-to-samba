import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
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

    const items = [
        { key: '1', label: 'Why we do' },
        { key: '2', label: 'The things we do' },
        { key: '3', label: 'Says a lot' },
        { key: '4', label: 'About us' },
    ];

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
       
    }, []);

    const handleMenuClick = () => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    };

    const handleMouseEnter = () => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    };

    const years = [
        { year: 2016, achievement: 'First major project completed' },
        { year: 2017, achievement: 'Expanded to new markets' },
        { year: 2018, achievement: 'Launched new product line' },
        { year: 2019, achievement: 'Reached 1 million users' },
        { year: 2020, achievement: 'Opened new headquarters' },
        { year: 2021, achievement: 'Awarded industry recognition' },
        { year: 2022, achievement: 'Implemented AI solutions' },
        { year: 2023, achievement: 'Achieved carbon neutrality' },
        { year: 2024, achievement: 'Future goals and plans' },
    ];

    const participants = [
        {
            name: 'Maria Eduarda',
            role: 'Community Manager',
            description: 'na Howto Samba, organizando os criativos e otimizando a gestão de recursos.',
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

  
      return(
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

<h1 className="title">HOW TO SAMBA?</h1> 
<div className="cards-container">
     <div className="card">
        <p>Brasil is abundant from natural resources to culture and joy.</p>
        <p>Somehow, we find little of this spirit taking the digital spotlight... and here we commit to changing this scenario. Brazil's culture is miscellaneous and underexplored in its contribution to the global moment. Curiously exploring the contemporary life, from roots to flowers, looking for a way our samba souls can contribute to the ever-globalizing world’s harmony.</p>
      </div>

   
    
     
      </div>
      <div className="timeline">
                {years.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-point"></div>
                        <div className="timeline-achievement">{item.achievement}</div>
                    </div>
                ))}
            </div>

            <div className="participants-container" >
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

  </div>)
}

export default Home;
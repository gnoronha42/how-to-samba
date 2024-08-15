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

<h1 className="title">HOW TO SAMBA?</h1> {/* Título adicionado */}

<div className="card">
        <p>Brasil is abundant from natural resources to culture and joy.</p>
        <p>Somehow, we find little of this spirit taking the digital spotlight... and here we commit to changing this scenario. Brazil's culture is miscellaneous and underexplored in its contribution to the global moment. Curiously exploring the contemporary life, from roots to flowers, looking for a way our samba souls can contribute to the ever-globalizing world’s harmony.</p>
      </div>

  </div>)
}

export default Home;
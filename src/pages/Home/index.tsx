import { Menu } from 'antd';
import React from 'react';
import './style.css';


const Home = () => {
    const items = [
        { key: '1', label: 'Why we do' },
        { key: '2', label: 'The things we do' },
        { key: '3', label: 'Says a lot' },
        { key: '4', label: 'About us' },
      ];
  
      return(
   <div className="home" >
      <Menu
          theme="dark"
          mode="horizontal"
          className='custom-menu'
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />

<h1 className="title">HOW TO SAMBA?</h1> {/* Título adicionado */}

<div className="card">
        <p>Brasil is abundant from natural resources to culture and joy.</p>
        <p>Somehow, we find little of this spirit taking the digital spotlight... and here we commit to changing this scenario. Brazil's culture is miscellaneous and underexplored in its contribution to the global moment. Curiously exploring the contemporary life, from roots to flowers, looking for a way our samba souls can contribute to the ever-globalizing world’s harmony.</p>
      </div>

  </div>)
}

export default Home;
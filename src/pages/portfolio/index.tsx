import React from 'react';
import { useBackgroundImage } from '../../hooks/backgroundImage';
import NavBar from '../../components/navBar';
import { participants } from '../../utils/mockData';

const Portfolio: React.FC = () => {
 const { backgroundImage } = useBackgroundImage();
  return (
  <div className='page-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
   <NavBar />

   {/* participants map*/}
   <div className='participants-container'>
    {participants.map((participant: any) => (
        <div key={participant.id} className='participant'>
            <img src={participant.image} alt={participant.name} className='participant-image' />
            <div className='participant-info'>
                <h3 className='participant-name'>{participant.name}</h3>
                <p className='participant-description'>{participant.description}</p>
            </div>
        </div>
    ))}
   </div>
   
  </div>
  );
}

export default Portfolio;
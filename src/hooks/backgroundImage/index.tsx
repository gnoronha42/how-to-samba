import { useState, useEffect } from 'react';
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
const backgrounds = [
   
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

export const useBackgroundImage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return { backgroundImage: backgrounds[backgroundIndex] };
};
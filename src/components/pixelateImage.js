import React, { useState, useEffect } from 'react';
import './PixelateImage.css'; // Import the CSS file for styling
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
import img4 from './image13.png';
import img5 from './image5.png';
import img6 from './image6.png';
import img7 from './image7.png';
import img8 from './image13.png';
import img9 from './image9.png';
import img10 from './image10.png';
import img11 from './image11.png';
import img12 from './image12.png';
import img13 from './image13.png';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  // Add more image URLs as needed
];

const PixelateImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPixelated, setIsPixelated] = useState(false);

  useEffect(() => {
    // Change image and pixelation state every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsPixelated((prevIsPixelated) => !prevIsPixelated);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`image-container ${isPixelated ? 'pixelated' : ''}`}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="image"
        width="280px"
      />
    </div>
  );
};

export default PixelateImage;
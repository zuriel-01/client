import { useState, useEffect } from 'react';
import house1 from '../assets/hero-1.png';
import house2 from '../assets/hero-2.png';
import house3 from '../assets/hero-3.png';
import '../app.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const images = [house1, house2, house3];

  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  // };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optional: Auto-play the carousel
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isMobile]);

  return (
    <div className="hero">
      <div>
        <span className="head center">
          <p>Explore Homes</p> <p style={{ color: 'black' }}>at</p>
        </span>
        <span className="head center" style={{ padding: '0px', color: 'black' }}>
          Your Fingertips
        </span>
      </div>
      <h1 className="head center" style={{ padding: '10px', fontSize: '30px', color: 'black' }}>
        Download the Mobile App Now
      </h1>

      {isMobile ? (
        <div className="house center">
          <div className="carousel">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            {/* <button className="carousel-control-prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="carousel-control-next" onClick={nextSlide}>
              &#10095;
            </button> */}
          </div>
        </div>
      ) : (
        <div className="house center" style={{ display: 'flex', gap: '10px' }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`House ${index + 1}`} style={{ width: '30%' }} />
          ))}
        </div>
      )}

      <div>
        <span className="paragraph1 center">
          Finding your dream home has never been easier. Tap below to download the app and start your
          journey today!
        </span>
        <span className="center">
          <button className="button2">Get Started</button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
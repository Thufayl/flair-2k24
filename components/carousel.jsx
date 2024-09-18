"use client"

import { useState } from 'react';
import Card from './card';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

  const handleClick = (index) => {
    if (index < currentIndex) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (index > currentIndex) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalCards - 1));
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex justify-center items-center">
     
      <div
        className={`transition-all duration-300 transform ease-in-out${
          currentIndex > 0
            ? 'scale-105 -translate-x-10 opacity-100'
            : 'scale-100 opacity-0'
        } w-1/3 cursor-pointer`}
        onClick={() => handleClick(currentIndex - 1)}
      >
        {currentIndex > 0 ? (
          <Card
            img={cards[currentIndex - 1].img}
            videoSrc={cards[currentIndex - 1].videoSrc}
            description={cards[currentIndex - 1].description}
            isCenter={false} // left
          />
        ) : null}
      </div>

      <div className="w-1/2 transition-all duration-300 transform ease-in-out scale-150 z-10">
        <Card
          img={cards[currentIndex].img}
          videoSrc={cards[currentIndex].videoSrc}
          description={cards[currentIndex].description}
          isCenter={true} // Center
        />
      </div>

      <div
        className={`transition-all duration-300 transform ease-in-out ${
          currentIndex < totalCards - 1
            ? 'scale-105 translate-x-10 opacity-100'
            : 'scale-100 opacity-0'
        } w-1/3 cursor-pointer`}
        onClick={() => handleClick(currentIndex + 1)}
      >
        {currentIndex < totalCards - 1 ? (
          <Card
            img={cards[currentIndex + 1].img}
            description={cards[currentIndex + 1].description}
            isCenter={false} // right
          />
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;

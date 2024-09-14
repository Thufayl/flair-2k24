"use client";

import { useState } from 'react';
import Card from './card';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card img={card.img} description={card.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;

"use client"

import { useState, useEffect } from 'react';
import Carousel from '../components/carousel';
import TitleList from '../components/TitleList';
const cardsData = [{
      title: "QUANTUM QUEST",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",
    },
    {
      title: "COLLIDER CONCLAVE",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",
    },
    {
      title: "GLITCHVERSE GUESS",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",  
    },
    {
      title: "SINISTER HUNT",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",
    },
    {
      title: "CODE SWING DUO",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",
    },
    {
      title: "INTO THE MEMEVERSE",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",
    },
    {
      title: "MULTIVERSAL LINK UP",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",
    },
    {
      title: "SPIDEY PROMPTS",
      img: "/assets/card-bg-1.jpg",
      description: "Sample Description",  
    },
  ];

  export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    return (
      <div className="flex h-screen">
        {/* Left side: Title List */}
        <div className="w-1/3 flex flex-col items-start p-4">
          <h1 className="text-center text-3xl my-4 font-sans items-center">EVENTS</h1>
          <TitleList
            titles={cardsData.map(card => card.title)}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
  
        {/* Right side: Carousel */}
        <div className="w-2/3 flex justify-center items-center">
          <Carousel cards={cardsData} currentIndex={currentIndex} />
        </div>
      </div>
    );
  }
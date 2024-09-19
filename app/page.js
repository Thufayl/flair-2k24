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
      <div className="flex h-screen bg-black">
        {/* Title List on the left */}
        <div className = "flex justify-left ml-28 mt-28 text-7xl w-2/4">
        <TitleList
          titles={cardsData.map(card => card.title)}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        </div>
  
        {/* Carousel on the right */}
        <Carousel cards={cardsData} currentIndex={currentIndex} />
      </div>
    );
  }
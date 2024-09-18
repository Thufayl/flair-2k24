import Image from "next/image";
import Card from "../components/card.jsx";
import Carousel from "../components/carousel.jsx"
export default function Home() {
    const cardsData = [{
      img: "/assets/card-bg-1.jpg",
      videoSrc: "/assets/vidEx.mp4",
      description: "QUANTUM QUEST"
    },
    {
      img: "/assets/card-bg-1.jpg",
      videoSrc: "/assets/vidEx.mp4",
      description: "COLLIDER CONCLAVE"
    },
    {
      img: "/assets/card-bg-1.jpg",
      videoSrc: "/assets/vidEx.mp4",
      description: "GLITCHVERSE GUESS"
    },
    {
      img: "/assets/card-bg-1.jpg",
      videoSrc: "/assets/vidEx.mp4",
      description: "SINISTER HUNT"
    },
    {
      img: "/assets/card-bg-1.jpg",
      videoSrc: "/assets/vidEx.mp4",
      description: "CODE SWING DUO"
    },
    {
      img: "/assets/card-bg-1.jpg",
      videoSrc: "./assets/vidEx.mp4",
      description: "INTO THE MEMEVERSE"
    },
    {
      img: "/assets/card-bg-1.jpg",
      videoSrc: "/assets/vidEx.mp4",
      description: "MULTIVERSAL LINK UP"
    },
    {
      img: "/assets/card-bg-1.jpg",
      videoSrc: "/assets/vidEx.mp4",
      description: "SPIDEY PROMPTS"
    },
  ];

  return(
    <div>
      <div className = "absolute top-10 w-full text-center py-4">
      <h1 className = "font-bold font-mono text-5xl">EVENTS</h1>
      </div>
      <div className="min-h-screen flex justify-center items-center">
      <Carousel cards = {cardsData}/>
    </div>
    </div>

  );
}

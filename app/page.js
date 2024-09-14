import Image from "next/image";
import Card from "../components/card.jsx";
import Carousel from "../components/carousel.jsx"
export default function Home() {
    const cardsData = [{
      img: "./assets/card-bg-2.jpg",
      description: "Event 1"
    },
    {
      img: "./assets/card-bg-1.jpg",
      description: "Event 1"
    },
    {
      img: "./assets/card-bg-1.jpg",
      description: "Event 1"
    },
    {
      img: "./assets/card-bg-1.jpg",
      description: "Event 1"
    },
  ];

  return(
    <div className="min-h-screen flex justify-center items-center">
      <Carousel cards = {cardsData}/>
    </div>
  );
}

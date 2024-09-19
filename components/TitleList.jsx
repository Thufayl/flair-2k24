"use client"

// components/TitleList.js
import { useEffect, useRef } from 'react';

export default function TitleList({ titles, currentIndex, setCurrentIndex }) {
  const listRef = useRef(null);

  // Scroll to the current title
  useEffect(() => {
    if (listRef.current) {
      const currentItem = listRef.current.children[currentIndex];
      if (currentItem) {
        currentItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [currentIndex]);

  return (
    <div
      className="max-w-screen-md p-4 overflow-y-auto max-h-screen cursor-pointer"
      ref={listRef}
    >
      {titles.map((title, index) => (
        <div
          key={index}
          onClick={() => setCurrentIndex(index)} // On title click, set the current card
          className={`p-4 mt-0 mb-2 font-sans text-6xl font-semibold transition-opacity duration-300 whitespace-nowrap ${
            index === currentIndex ? 'text-blue-600' : 'text-gray-700'
          }`}
        >
          {title}
        </div>
      ))}
    </div>
  );
}

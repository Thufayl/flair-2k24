"use client";

import { useEffect, useRef } from "react";

export default function TitleList({ titles, currentIndex, setCurrentIndex }) {
  const listRef = useRef(null);

  // Scroll tracking: Automatically update the active item as the user scrolls
  const handleScroll = () => {
    if (listRef.current) {
      const items = Array.from(listRef.current.children);
      const containerRect = listRef.current.getBoundingClientRect();

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();

        // If the item's top is aligned with the container's top, it becomes active
        if (itemRect.top >= containerRect.top && itemRect.top <= containerRect.top + 5) {
          setCurrentIndex(index);
        }
      });
    }
  };

  // Scroll the list to the active item on initial load
  useEffect(() => {
    if (listRef.current) {
      const currentItem = listRef.current.children[currentIndex];
      if (currentItem) {
        currentItem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div
      className="w-1/2 h-[500vh] overflow-y-auto p-4" // Ensures vertical scroll
      ref={listRef}
      onScroll={handleScroll}
      style={{ height: "500vh", overflowY: "auto" }} // Ensures scroll works
    >
      {titles.map((title, index) => (
        <div
          key={index}
          onClick={() => setCurrentIndex(index)} // On title click, update the current card
          className={`p-4 mb-2 text-2xl font-semibold transition-opacity duration-300 ${
            index === currentIndex ? "text-blue-600 bg-gray-100" : "text-gray-700"
          }`}
        >
          {title}
        </div>
      ))}
    </div>
  );
}

import "tailwindcss";
import React from "react";

export default function WorkTile({ isOpen, children }) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-[1000px] opacity-100 mt-5" : "max-h-0 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

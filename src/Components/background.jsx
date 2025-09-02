import React from "react";

export default function Background({ Mode }) {
  return (
    <div>
      <div
        className={`w-screen h-screen transition-colors ease-in-out duration-800 ${
          !Mode ? "bg-blue-200" : "bg-blue-950"
        }`}
      ></div>
    </div>
  );
}

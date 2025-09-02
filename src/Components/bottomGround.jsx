import "tailwindcss";
import React from "react";
import grassyHills from "../assets/images/GrassyHillsCropped.webp";

export default function Ground() {
  return (
    <div>
      <div className="flex max-w-225 dark:brightness-60 transition-all duration-800">
        <img className="shrink" src={grassyHills}></img>
        <img className="shrink" src={grassyHills}></img>
        <img className="shrink" src={grassyHills}></img>
        <img className="shrink" src={grassyHills}></img>
        <img className="shrink" src={grassyHills}></img>
        <img className="shrink" src={grassyHills}></img>
        <img className="shrink" src={grassyHills}></img>
      </div>
    </div>
  );
}

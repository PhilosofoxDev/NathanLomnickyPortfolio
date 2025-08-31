import "tailwindcss";
import React from "react";
import grassyHills from "../assets/images/GrassyHillsCropped.webp";
import darkHills from "../assets/images/DarkGrassyHills.png";

export default function Ground({ Mode }) {
  return (
    <div>
      <div className="flex max-w-225">
        <img className="shrink" src={Mode ? darkHills : grassyHills}></img>
        <img className="shrink" src={Mode ? darkHills : grassyHills}></img>
        <img className="shrink" src={Mode ? darkHills : grassyHills}></img>
        <img className="shrink" src={Mode ? darkHills : grassyHills}></img>
        <img className="shrink" src={Mode ? darkHills : grassyHills}></img>
        <img className="shrink" src={Mode ? darkHills : grassyHills}></img>
        <img className="shrink" src={Mode ? darkHills : grassyHills}></img>
      </div>
    </div>
  );
}

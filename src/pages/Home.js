import React from 'react'
import "./css/home.css";
import HeroCarousel from '../Components/Carousel';
import HoverText from '../Components/HoverText';
import Pruducts from '../Components/Pruducts';
export default function Home() {
  return (
    <div className="main">
      <HeroCarousel />
      <HoverText />
      <Pruducts />
    </div>
  );
}

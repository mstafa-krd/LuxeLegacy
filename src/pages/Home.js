import React from 'react'
import "./css/home.css";
import Header from '../Components/Header';
import HeroCarousel from '../Components/Carousel';
import HoverText from '../Components/HoverText';
import Pruducts from '../Components/Pruducts';
import Fotter from '../Components/Fotter';
export default function Home() {
  return (
    <div className="main">
      <HeroCarousel />
      <HoverText />
      <Pruducts />
    </div>
  );
}

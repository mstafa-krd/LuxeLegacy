import React from "react";
import { HeroPageData } from "./HeroPageData";
import "./css/carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function handleProuduct(name,id) {
    window.location.pathname = `product/${name}/${id}`;
}
  return (
    <div className="carousel">
      <div className="slider-container">
        <Slider {...settings}>
          {HeroPageData.map((item, index) => (
            <div key={index} className="slider-item">
              <div className="slider-img-container">
                <img
                  onClick={() => handleProuduct(item.name, item.id)}
                  src={item.img}
                  alt={` num ${index + 1}`}
                  className={"slider-img "}
                />

                <div
                  onClick={() => handleProuduct(item.name, item.id)}
                  className="hero-name"
                >
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="circle">{/* make this circle at the end  */}</div>
    </div>
  );
}

import { useState } from "react";
import { pruductsData } from "./PruductsData";

export default function Pruduct(props) {
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Initialize with -1

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1); // Reset to -1 when leaving any card
  };
  function handleId(name, id) {
    window.location.pathname = `product/${name}/${id}`
     setTimeout(() => {
       const targetElement = document.querySelector(".header"); // Adjust the selector accordingly
       if (targetElement) {
         targetElement.scrollIntoView({ behavior: "smooth" });
         //targetElement.scrollIntoView({ behavior: "smooth" });: If the targetElement exists, this line uses the scrollIntoView method to smoothly scroll the page to make the targetElement visible in the viewport.
       }
     }, 100);
  }
  return (
    <div className="pruducts-box">
      {pruductsData.map((item, key) => (
        <div key={key}>
          {item.type === props.type && (
            <div
              onClick={() => handleId(item.name, item.id)}
              key={key}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              className="pruduct-card"
            >
              <div className="pruduct-img">
                <img
                  src={
                    key === hoveredIndex
                      ? item.hoverBackground
                      : Object.values(item.imges)[0]
                  }
                  alt=""
                />

                {/* Here, Object.values(item.imges)[0] will give you the URL of the first image
             within the imges object for each product. */}
              </div>
              <div className="pruduct-details">
                <div className="pruduct-newandprice">
                  <p>New!</p> <span>${item.price}</span>
                </div>
                <div className="pruducts-name">{item.name}</div>
              </div>
            </div>
          )}
          {props.type === "" && (
            <div
              key={key}
              onClick={() => handleId(item.name, item.id)}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              className="pruduct-card"
            >
              <div className="pruduct-img">
                <img
                  src={
                    key === hoveredIndex
                      ? item.hoverBackground
                      : Object.values(item.imges)[0]
                  }
                  alt=""
                />

                {/* Here, Object.values(item.imges)[0] will give you the URL of the first image
             within the imges object for each product. */}
              </div>
              <div className="pruduct-details">
                <div className="pruduct-newandprice">
                  <p>New!</p> <span>${item.price}</span>
                </div>
                <div className="pruducts-name">{item.name}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

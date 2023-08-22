import { useEffect, useState } from "react";
import { pruductsData } from "../Components/PruductsData";
import "./css/searchPage.css";
export default function SearchPage() {
  const [filter, setFilter] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Initialize with -1

  const urlSegments = window.location.pathname.split("/");

  const path = urlSegments[urlSegments.length - 1];
  const decodedPath = decodeURIComponent(path);

  const name = decodedPath.replace("%20", " ");
  /*  In this code snippet, the decodeURIComponent function is used
   to decode the URL-encoded path, 
   and then the replace function with a regular expression is used to replace all occurrences of %20 
   with spaces throughout the decodedPath string. The regular expression %20 with the g flag ensures
    that all occurrences are replaced, not just the first one.*/
  useEffect(() => {
    const newFilter = pruductsData.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
    setFilter(newFilter);
    console.log(newFilter); // Use newFilter instead of filter
  }, [name]); // Include name in the dependency array

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1); // Reset to -1 when leaving any card
  };
  function handleId(name, id) {
    window.location.pathname = `product/${name}/${id}`;
    setTimeout(() => {
      const targetElement = document.querySelector(".header"); // Adjust the selector accordingly
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        //targetElement.scrollIntoView({ behavior: "smooth" });: If the targetElement exists, this line uses the scrollIntoView method to smoothly scroll the page to make the targetElement visible in the viewport.
      }
    }, 100);
  }
  return (
    <div className="search-page">
      <div className="search-name">“{name}”</div>
      <div className="pruducts-box">
        {filter.map((item, key) => {
          return (
            <div key={key}>
              <div
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

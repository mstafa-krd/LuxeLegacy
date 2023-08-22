import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pruductsData } from "../Components/PruductsData";
import "./css/pruductPage.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { WindowSize } from "../Context/WindowContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../Context/CartContext";
export default function PruductPage() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;
  const {
    
    addToMultiCart,
  } = useContext(CartContext);
  const urlSegments = window.location.pathname.split("/");
  const id = parseInt(urlSegments[urlSegments.length - 1], 10);
  //
  //urlSegments: This variable holds an array of segments obtained by splitting the URL path using the "/" character.For example, if the URL is / product / 123, urlSegments would be["", "product", "123"].

  // urlSegments.length: This property gives you the number of elements in the urlSegments array. In the example above, it's 3.

  // urlSegments.length - 1: This subtracts 1 from the length of the urlSegments array. In the example, 3 - 1 equals 2.

  // , 10: This second argument to parseInt specifies the radix or base for parsing the string. In JavaScript, when parsing strings, it's a good practice to always specify the radix to prevent potential issues. In this case, we're using base 10, which is the usual decimal number system.

  // const name = id.replace("%20", " ");
  const data = pruductsData[id];
  const imageKeys = Object.keys(data.imges);
  /* const imageKeys = Object.keys(data.imges);

This line of code uses the Object.keys() function to extract an array of keys (property names) from the data.imges object. In your case, the data.imges object contains image URLs, and imageKeys will be an array containing the keys of these image URLs.

<img src={data.imges[imageKeys[2]]} alt="" />

Here, you're using the img HTML element to display an image. Let's break down the src attribute:

data.imges: This is the object that contains your image URLs.
[imageKeys[2]]: This is using the imageKeys array to access the third image URL. imageKeys[2] refers to the third key in the array.
So, when you use data.imges[imageKeys[2]], you are retrieving the image URL that corresponds to the third key (property) in the data.imges object.

Overall, this code is dynamically generating the src attribute of the <img> element by using the array of image keys (imageKeys) to access a specific image URL from the data.imges object. In your case, it's accessing the third image URL. */

  const [ordersNumbers, setOrdersNumbers] = useState(1);
  const [imgKey, setImgKey] = useState(0);

  function handlemin() {
    ordersNumbers > 1 && setOrdersNumbers((prev) => prev - 1);
  }
  function handleadd() {
    setOrdersNumbers((prev) => prev + 1);
  }

  function handleImgChange(index) {
    setImgKey(index);
  }
  const settings = {
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
  };

  return (
    <div>
      {data ? (
        windowSize >= 993 ? (
          <div className="pruduct">
            <div className="side-img">
              {Object.values(data.imges).map((item, key) => (
                <img
                  key={key}
                  onClick={() => handleImgChange(key)}
                  style={{
                    border: imgKey === key ? "3px solid black" : "none",
                  }}
                  src={item}
                  alt="pd"
                />
              ))}
            </div>
            <div className="main-img">
              <img src={data.imges[imageKeys[imgKey]]} alt="" />
            </div>
            <div className="right-info">
              <div className="type">{data.type}</div>
              <div className="pruduct-name">{data.name}</div>
              <div className="pruduct-number">
                <FontAwesomeIcon
                  className="icon-border add-min-btn "
                  onClick={handlemin}
                  icon={faMinus}
                />
                <input
                  type="number"
                  className="orders-input"
                  value={ordersNumbers}
                  onChange={(e) => {
                    setOrdersNumbers(parseInt(e.target.value, 10));
                  }}
                />

                <FontAwesomeIcon
                  className="icon-border add-min-btn"
                  onClick={handleadd}
                  icon={faPlus}
                />
              </div>
              <div
                onClick={() => addToMultiCart(ordersNumbers, id)}
                className="pruduct-price add-min-btn"
              >
                ADD ${data.price * ordersNumbers}
              </div>
              <div className="description ">{data.description}</div>
            </div>
          </div>
        ) : (
          //--------------------------------------------------------
          //--------------------------------------------------------
          //--------------------------------------------------------

          <div className="pruduct-s-s pruduct">
            <div className="right-info-s-s">
              <div className="type">{data.type}</div>
              <div className="pruduct-name">{data.name}</div>
              <div className="description ">{data.description}</div>
            </div>

            <Slider {...settings}>
              {Object.values(data.imges).map((item, key) => (
                <div key={key} className=" img-s-s">
                  <img src={item} alt="pd" />
                </div>
              ))}
            </Slider>
            <div className="right-info-s-s">
              <div className="pruduct-number">
                <FontAwesomeIcon
                  className="icon-border add-min-btn "
                  onClick={handlemin}
                  icon={faMinus}
                />
                <input
                  type="number"
                  className="orders-input"
                  value={ordersNumbers}
                  onChange={(e) => {
                    setOrdersNumbers(parseInt(e.target.value, 10));
                  }}
                />

                <FontAwesomeIcon
                  className="icon-border add-min-btn"
                  onClick={handleadd}
                  icon={faPlus}
                />
              </div>
              <div
                onClick={() => addToMultiCart(ordersNumbers, id)}
                className="pruduct-price add-min-btn pruduct-price-s-s "
              >
                ADD ${data.price * ordersNumbers}
              </div>
            </div>
          </div>
        )
      ) : (
        <div> 404 Product not found</div>
      )}
    </div>
  );
}

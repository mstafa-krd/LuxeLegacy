import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/cart.css";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { pruductsData } from "../Components/PruductsData";
import { WindowSize } from "../Context/WindowContext";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;
  const {
    cartProducts,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    removeCart,
    getTotalCart,
    selectedProducts,
  } = useContext(CartContext);
  const TotalAmount = getTotalCartAmount();

  const TotalCart = getTotalCart();

  let stripePromise;

  function getStripe() {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }
    return stripePromise;
  }

  const lineItems = Object.keys(cartProducts)
    .filter((itemId) => cartProducts[itemId] > 0)
    .map((itemId) => ({
      price: pruductsData[itemId].stripeId,
      quantity: cartProducts[itemId],
    }));
  const checkoutOptions = {
    lineItems: lineItems,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    console.log(cartProducts);
    console.log("redirectToCheckout");
    console.log(selectedProducts);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };

  function handdleDelete(id) {
    removeCart(id);
  }

  return (
    <div className="cart">
      <div className="cart-f-s">{TotalCart} items in Cart</div>
      <div className="cart-s-s">
        <div>Item</div>
        <div className="cart-r-s-s">
          <div>Price</div>
          <div>Qty</div>
          <div>Subtotal</div>
        </div>
      </div>
      {pruductsData.map((item, key) => (
        <div key={key}>
          {cartProducts[item.id] > 0 && (
            <>
              <div className="cart-s-s">
                <div className="cart-l-t-s">
                  <div>
                    <FontAwesomeIcon
                      className="cart-x-icon"
                      onClick={() => handdleDelete(item.id)}
                      icon={faX}
                    />

                    <img src={Object.values(item.imges)[0]} alt="prudcut img" />
                  </div>
                  <div>{item.name}</div>
                </div>
                <div className="cart-r-s-s2 cart-r-t-s">
                  <div className="s-s-p">
                    {windowSize < 963 && <p>price:</p>} <p>${item.price}</p>
                  </div>
                  <div>
                    <div className="pruduct-number cart-pruduct-number">
                      <FontAwesomeIcon
                        onClick={() => removeFromCart(item.id)}
                        className="icon-border add-min-btn "
                        icon={faMinus}
                      />
                      {cartProducts[item.id]}
                      <FontAwesomeIcon
                        onClick={() => addToCart(item.id)}
                        className="icon-border add-min-btn"
                        icon={faPlus}
                      />
                    </div>
                  </div>
                  <div className="s-s-p">
                    {windowSize < 963 && <p>Subtotal:</p>}
                    <p>${item.price * cartProducts[item.id]}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      {TotalAmount > 0 ? (
        <div className="cart-fo-s">
          <div>Total ${TotalAmount}</div>
          <button onClick={redirectToCheckout}>CHECKOUT</button>
        </div>
      ) : (
        <h1 className="no-pruduct-found">No product's have been found </h1>
      )}
    </div>
  );
}

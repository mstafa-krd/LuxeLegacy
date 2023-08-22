import "./css/Checkout.css";
export default function Success() {
  function home() {
    window.localStorage.removeItem("cart");
    window.location.pathname = "/";
  }

  return (
    <div className="upcancel">
      <div class="cancel-container">
        <h1 color="#fff">Order Successful</h1>
        <p>
          Your order has been successfully processed. Thank you for shopping
          with us!
        </p>
        <button onClick={home} className="back-button">
          Back to Home
        </button>
      </div>
    </div>
  );
}

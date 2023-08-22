import "./css/Checkout.css";
export default function Cancel() {
    return (
      <div color="red" className="upcancel">
    <div className="cancel-container">
      <h1>Order Cancelled</h1>
      <p>
        Your order has been cancelled. If you have any questions, please contact
        our support team.
      </p>
      <a href="/" className="back-button">
        Back to Home
      </a>
    </div></div>
  );
}

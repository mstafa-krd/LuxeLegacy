import img from "../Assets/imgs/AD1A2554-3_1000x.jpg";
import "./css/about.css";

export default function About() {
  return (
    <div className="about">
      <div className="f-a-s">
        <img src={img} alt="" />
        <div className="f-a-r-s">
          <h1>About</h1> Welcome to the Figma Store, a collection of Figma
          apparel (layers) and accessories (components) designed for our
          community.
        </div>
      </div>

      <div className=" s-a-s ">
        <h1>100% OF PROCEEDS ARE DONATED</h1>
        <div className="s-a-r-s">
          Any and all profits we generate from the store will be used to
          purchase carbon removal credits via reforestation from TIST (The
          International Small Group and Tree Planting Program). TIST is an
          innovative time-tested reforestation program that supports subsistence
          farmers in Kenya, Uganda, and Tanzania to tackle sustainable
          development and climate change through education and tree planting.
          <br />
          <a href="https://program.tist.org/">Learn more about TIST </a>
        </div>
      </div>

      <div className=" s-a-s">
        <h1>FAQ</h1>
        <div className="s-a-r-s">
          <h2> is this the real figma Store?</h2>
          <p>
            No this is just a demo that i made to practice my skills on front
            end
          </p>
          <h2>How does your apparel fit? </h2>
          <p>
            Our sizing is unisex. For a more tailored fit, we recommend that you
            size down.
          </p>
          <h2>Where do you ship? </h2>
          <p>
            We currently ship to the following countries: Austria, Belgium,
            Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark,
            Estonia, Finland, France, Greece, Germany, Hungary, Italy, Ireland,
            Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal,
            Romania, Slovakia, Slovenia, Spain, Sweden, United Kingdom, Japan,
            Canada, and the United States.
            <br />
            <br />
            We'll be working with our vendors to expand warehousing and shipping
            operations so that we can bring The Figma Store to more countries in
            the future. Stay tuned for updates and thank you for your
            understanding!
          </p>

          <h2> When will I get my order?</h2>
          <p>
            Reach out to thefigmastore@figma.com if you place an order and don't
            receive a shipping notice within 5 business days OR if your order
            hasn't arrived 10 days after it has shipped.{" "}
          </p>

          <h2> Can I edit or cancel my order once it's placed?</h2>
          <p>
            You are unable to edit your order once placed, but if you would like
            to cancel it, please connect with thefigmastore@figma.com.
          </p>

          <h2> How do I contact support?</h2>
          <p>You can contact support by e-mailing thefigmastore@figma.com</p>
        </div>
      </div>
      <div className=" s-a-s">
        <h1>CUSTOMER CARE</h1>
        <div className="s-a-r-s">
          <h2>Shipping</h2>
          <p>
            Once you've made a purchase, an e-mail confirmation will be sent to
            the e-mail address you provided. This e-mail acts as an invoice and
            includes your order number.
            <br />
            <br />
            Once your order is placed, it'll ship from our warehouse within 2-5
            business days. Orders placed after 11:00 AM(EST) may be processed
            the next business day, and orders placed on weekends and holidays
            will be processed the following business day starting at 8:00
            AM(EST). During peak periods, processing times may exceed 2 business
            days.
            <br />
            <br />
            Depending on your location, your order will be shipping from the
            United Kingdom, Ireland, or the United States. You will not need to
            pay customs on your orders. Once your order has been shipped, you
            will receive an e-mail with your shipment's tracking information,
            allowing you to keep tabs on the progress of your delivery.
          </p>
          <h2>Returns</h2>
          <p>
            We currently do not accept returns and are unable to edit your order
            once placed. If you would like to cancel your order and replace it
            with a new one before it has shipped, please connect with
            thefigmastore@figma.com.
          </p>

          <h2 className="contact-us"> Contact Us</h2>
          <p>You can contact support by emailing thefigmastore@figma.com.</p>
        </div>
      </div>
    </div>
  );
}

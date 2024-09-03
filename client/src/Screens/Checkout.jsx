import TourPic from "../assets/images/Vans/Van3.jpg";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="section left">
        <h1>Checkout</h1>
        <h2>
          Order <span>#430824305987</span>
        </h2>
        <div className="tour-details">
          <img src={TourPic} alt="Tour Pic" />
          <div>
            <h3>Port Harcourt, New York</h3>
            <p>
              <strong>Departure Date: </strong>October 16th, 2021 @ 10am
            </p>
            <p>
              <strong>Duration: </strong>3 Days
            </p>
            <p>
              <strong>Departure from: </strong>New York City
            </p>
            <p>
              <strong>Departure time:</strong>9:50 am
            </p>
            <p>
              <strong>Destination: </strong>Port Harcourt, New York
            </p>
            <p>
              <strong>Tickets:</strong>
              <span></span>
            </p>

            <Link to="/tour/id" className="button">
              Change Details
            </Link>
          </div>
          <span>$598:00</span>
        </div>
        <section>
          <p>
            Subtotal: <strong>$598.00</strong>
          </p>
          <p>
            Subtotal: <strong>$598.00</strong>
          </p>
          <p>
            Amount Paid: <strong>$0.00</strong>
          </p>
          <p>
            Amount Due: <strong>$598.00</strong>
          </p>
        </section>
      </div>
      <form className="section right" action="">
        <h2>Contact Information</h2>
        <input className="input" type="text" placeholder="Full name" />
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="email" placeholder="Re-type Email" />
        <input className="input" type="number" placeholder="Phone number" />

        <p>
          <strong>Amount to Pay now: </strong>
          <span>$598:00</span>
        </p>
        <hr />

        <h2>Payment Method</h2>
        <div className="payment-method"></div>
        <p>
          <input type="checkbox" id="check-box" />
          <label htmlFor="check-box">
            I have read and agree with the terms of service.
          </label>
        </p>
        <button className="button">Complete My Booking</button>
      </form>
    </div>
  );
};

export default Checkout;

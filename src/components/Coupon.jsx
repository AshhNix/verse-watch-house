import { useState } from "react";
import { useCart } from "../context/CartContext";

const Coupon = () => {

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const {
    setCoupon,
    cart,
  } = useCart();


  const coupons = {
    VERS10: 10,
    TIME15: 15,
    WELCOME20: 20,
  };


  const applyCoupon = () => {

    const enteredCode =
      code.trim().toUpperCase();


    if (cart.length === 0) {

      setMessage(
        "Add a timepiece before applying a coupon."
      );

      return;
    }


    if (coupons[enteredCode]) {

      setCoupon({
        code: enteredCode,
        discount: coupons[enteredCode],
      });

      setMessage(
        `${coupons[enteredCode]}% discount applied.`
      );

    } else {

      setCoupon(null);

      setMessage(
        "Invalid coupon code."
      );
    }
  };


  return (
    <div className="coupon-box">

      <div className="coupon-header">

        <span className="coupon-label">
          PRIVATE OFFER
        </span>

        <p>
          Enter your VÉRSE code.
        </p>

      </div>


      <div className="coupon-input-area">

        <input
          type="text"
          placeholder="ENTER CODE"
          value={code}
          onChange={(event) =>
            setCode(event.target.value)
          }
        />

        <button onClick={applyCoupon}>
          APPLY
        </button>

      </div>


      {message && (
        <span className="coupon-message">
          {message}
        </span>
      )}


      <small>
        Try: VERS10 · TIME15 · WELCOME20
      </small>

    </div>
  );
};

export default Coupon;
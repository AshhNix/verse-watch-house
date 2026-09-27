import { useCart } from "../context/CartContext";

const OrderSummary = () => {

  const {
    subtotal,
    discount,
    gst,
    grandTotal,
    coupon,
  } = useCart();


  return (
    <div className="order-summary">

      <div className="summary-header">

        <div>
          <span>
            YOUR SELECTION
          </span>

          <small>
            VÉRSE / ORDER SUMMARY
          </small>
        </div>

        <span>
          ◇
        </span>

      </div>


      <div className="summary-row">

        <span>
          Subtotal
        </span>

        <strong>
          ₹{subtotal.toLocaleString("en-IN")}
        </strong>

      </div>


      <div className="summary-row discount-row">

        <span>
          Discount
          {coupon && ` · ${coupon.code}`}
        </span>

        <strong>
          − ₹
          {discount.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            }
          )}
        </strong>

      </div>


      <div className="summary-row">

        <span>
          GST · 18%
        </span>

        <strong>
          ₹
          {gst.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            }
          )}
        </strong>

      </div>


      <div className="summary-divider"></div>


      <div className="grand-total">

        <div>

          <span>
            GRAND TOTAL
          </span>

          <small>
            Inclusive of GST
          </small>

        </div>

        <strong>
          ₹
          {grandTotal.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            }
          )}
        </strong>

      </div>


      <button className="checkout-button">

        <span>
          PROCEED TO CHECKOUT
        </span>

        <span>
          →
        </span>

      </button>

    </div>
  );
};

export default OrderSummary;
import { useCart } from "../context/CartContext";

const OrderSummary = () => {
  const {
    subtotal,
    discount,
    gst,
    grandTotal,
    totalItems,
    coupon,
  } = useCart();

  return (
    <aside className="order-summary">

      <div className="summary-header">

        <div>
          <span>ORDER SUMMARY</span>

          <small>
            {totalItems}{" "}
            {totalItems === 1 ? "TIMEPIECE" : "TIMEPIECES"}
          </small>
        </div>

        <span>◇</span>

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
          {coupon && ` (${coupon.discount}%)`}
        </span>

        <strong>
          − ₹{discount.toLocaleString("en-IN")}
        </strong>

      </div>


      <div className="summary-row">

        <span>
          GST
        </span>

        <strong>
          ₹{gst.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </strong>

      </div>


      <div className="summary-divider"></div>


      <div className="grand-total">

        <div>

          <span>
            GRAND TOTAL
          </span>

          <small>
            Inclusive of 18% GST
          </small>

        </div>

        <strong>
          ₹
          {grandTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </strong>

      </div>


      <button
        type="button"
        className="checkout-button"
        onClick={() =>
          alert(
            "Thank you for choosing VÉRSE. Checkout demonstration complete."
          )
        }
      >
        Proceed to Checkout

        <span>
          →
        </span>
      </button>

    </aside>
  );
};

export default OrderSummary;

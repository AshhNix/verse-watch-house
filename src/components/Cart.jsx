import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const { cart, totalItems } = useCart();

  return (
    <section
      className="cart-section"
      id="cart"
    >

      <div className="cart-heading">

        <div>

          <span className="eyebrow">
            YOUR SELECTION
          </span>

          <h2>
            Curated for you.
          </h2>

        </div>

        <span className="cart-count">
          {totalItems}{" "}
          {totalItems === 1 ? "ITEM" : "ITEMS"}
        </span>

      </div>


      {cart.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-watch">
            ◇
          </div>

          <span>
            YOUR SELECTION IS EMPTY
          </span>

          <h3>
            Time waits for no one.
          </h3>

          <p>
            Explore the VÉRSE collection above
            and add a timepiece to begin your
            selection.
          </p>

        </div>

      ) : (

        <div className="cart-layout">

          <div className="cart-products">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

            <Coupon />

          </div>


          <OrderSummary />

        </div>

      )}

    </section>
  );
};

export default Cart;

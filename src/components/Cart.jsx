import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import OrderSummary from "./OrderSummary";

const Cart = () => {

  const { cart } = useCart();


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
            Time worth keeping.
          </h2>

        </div>


        <span className="cart-count">

          {cart.length
            .toString()
            .padStart(2, "0")}{" "}
          timepiece
          {cart.length !== 1 ? "s" : ""}

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
            Choose a timepiece.
          </h3>

          <p>
            Explore the VÉRSE collection and
            select a watch that speaks to you.
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
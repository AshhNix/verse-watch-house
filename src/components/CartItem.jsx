import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const itemTotal = item.price * item.quantity;

  return (
    <article className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <span className="cart-item-brand">
          VÉRSE
        </span>

        <h4>
          {item.name.replace("VÉRSE ", "")}
        </h4>

        <span className="cart-item-category">
          {item.category}
        </span>

        <div className="quantity-control">
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
          >
            −
          </button>

          <strong>
            {item.quantity}
          </strong>

          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-right">

        <strong>
          ₹{itemTotal.toLocaleString("en-IN")}
        </strong>

        <button
          type="button"
          className="remove-button"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

      </div>

    </article>
  );
};

export default CartItem;
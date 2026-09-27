import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="cart-item">

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
            onClick={() =>
              decreaseQuantity(item.id)
            }
          >
            −
          </button>

          <strong>
            {item.quantity}
          </strong>

          <button
            onClick={() =>
              increaseQuantity(item.id)
            }
          >
            +
          </button>

        </div>

      </div>


      <div className="cart-item-right">

        <strong>
          ₹
          {(
            item.price * item.quantity
          ).toLocaleString("en-IN")}
        </strong>

        <button
          className="remove-button"
          onClick={() =>
            removeFromCart(item.id)
          }
        >
          Remove
        </button>

      </div>

    </div>
  );
};

export default CartItem;
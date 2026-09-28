import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

const CartContext = createContext(null);

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  console.log("ACTION:", action);

  switch (action.type) {

    case "ADD_TO_CART": {
      const product = action.payload;

      const existing = state.cart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  const [coupon, setCoupon] = useState(null);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const subtotal = state.cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const discount = coupon
    ? subtotal * (coupon.discount / 100)
    : 0;

  const taxableAmount = subtotal - discount;

  const gst = taxableAmount * 0.18;

  const grandTotal = taxableAmount + gst;

  const totalItems = state.cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,

        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,

        coupon,
        setCoupon,

        subtotal,
        discount,
        gst,
        grandTotal,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};
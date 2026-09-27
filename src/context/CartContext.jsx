import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";


const CartContext = createContext();


const initialState = {
  cart: [],
};


const cartReducer = (state, action) => {

  switch (action.type) {

    case "ADD_TO_CART": {

      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );


      if (existingItem) {

        return {
          ...state,

          cart: state.cart.map((item) =>
            item.id === action.payload.id
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
            ...action.payload,
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
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const discount = coupon
    ? (subtotal * coupon.discount) / 100
    : 0;


  const taxableAmount =
    subtotal - discount;


  const gst = taxableAmount * 0.18;


  const grandTotal =
    taxableAmount + gst;


  const totalItems = state.cart.reduce(
    (total, item) =>
      total + item.quantity,
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
  return useContext(CartContext);
};
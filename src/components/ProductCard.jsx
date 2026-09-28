import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <article className="product-card">

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="product-category">
          {product.category}
        </span>

        <span className="product-index">
          {String(product.id).padStart(2, "0")}
        </span>

      </div>

      <div className="product-content">

        <div className="product-title-row">

          <div>
            <span className="product-brand">
              VÉRSE
            </span>

            <h3>
              {product.name.replace("VÉRSE ", "")}
            </h3>
          </div>

          <span className="watch-symbol">
            ◇
          </span>

        </div>

        <p>
          {product.description}
        </p>

        <div className="product-bottom">

          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <button
            type="button"
            className="add-button"
            onClick={() => {
              console.log("ADDING:", product);
              addToCart(product);
            }}
          >
            <span className="add-button-text">
              Add to Selection
            </span>

            <span className="add-button-icon">
              +
            </span>
          </button>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;
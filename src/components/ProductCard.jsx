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
          0{product.id}
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
            className="add-button"
            onClick={() => addToCart(product)}
          >
            Add to Selection
            <span>+</span>
          </button>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;
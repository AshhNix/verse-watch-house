import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section
      className="products-section"
      id="products"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            THE COLLECTION
          </span>

          <h2>
            Timepieces,
            <br />
            <em>considered.</em>
          </h2>
        </div>

        <p>
          Six expressions of precision, designed
          around a single idea — timelessness.
        </p>
      </div>

      <div className="collection-meta">
        <span>VÉRSE HOROLOGY</span>
        <span>06 TIMEPIECES</span>
        <span>EST. 2026</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
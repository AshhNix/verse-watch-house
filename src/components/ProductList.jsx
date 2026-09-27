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
            Six expressions of time.
          </h2>

        </div>


        <p>
          From understated minimalism to bold
          mechanical character, every VÉRSE
          timepiece is designed with intention.
        </p>

      </div>


      <div className="collection-meta">

        <span>
          06 TIMEPIECES
        </span>

        <span>
          VÉRSE / 2026
        </span>

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
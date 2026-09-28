import { useCart } from "../context/CartContext";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="site-header">

      <div className="brand">

        <div className="brand-mark">
          V
        </div>

        <div className="brand-text">

          <h1>
            VÉRSE
          </h1>

          <p>
            TIME, REFINED.
          </p>

        </div>

      </div>


      <nav className="nav-links">

        <a href="#products">
          Collection
        </a>

        <a href="#cart">
          Your Selection
        </a>

      </nav>


      <a
        href="#cart"
        className="header-cart"
      >

        <span className="cart-icon">
          ◇
        </span>

        <span>
          {String(totalItems).padStart(2, "0")}
        </span>

      </a>

    </header>
  );
};

export default Header;
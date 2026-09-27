const Header = () => {
  return (
    <header className="site-header">

      <div className="brand">

        <div className="brand-mark">
          V
        </div>

        <div className="brand-text">
          <h1>VÉRSE</h1>

          <p>TIME, REFINED.</p>
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


      <div className="header-cart">

        <span className="cart-icon">
          ◇
        </span>

        <span>00</span>

      </div>

    </header>
  );
};

export default Header;
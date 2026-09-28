import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>

      <div className="app">

        <Header />

        <main>

          {/* HERO */}

          <section className="hero">

            <div className="hero-content">

              <span className="hero-tag">
                ✦ EST. 2026 · VÉRSE HOROLOGY
              </span>

              <h1>
                Time,
                <br />
                <span>refined.</span>
              </h1>

              <p>
                Every second deserves something timeless.
                Discover a considered collection of watches
                designed for moments that matter.
              </p>

              <a
                href="#products"
                className="hero-button"
              >
                Explore Collection
                <span>↓</span>
              </a>

            </div>


            <div className="hero-watch">

              <div className="watch-orbit"></div>

              <div className="watch-face">

                <span className="watch-marker marker-12">
                  XII
                </span>

                <span className="watch-marker marker-3">
                  III
                </span>

                <span className="watch-marker marker-6">
                  VI
                </span>

                <span className="watch-marker marker-9">
                  IX
                </span>

                <div className="watch-hand hand-hour"></div>

                <div className="watch-hand hand-minute"></div>

                <div className="watch-center"></div>

                <span className="watch-brand">
                  VÉRSE
                </span>

              </div>

            </div>

          </section>


          {/* PRODUCT COLLECTION */}

          <ProductList />


          {/* SHOPPING CART */}

          <Cart />

        </main>

      </div>

    </CartProvider>
  );
}

export default App;

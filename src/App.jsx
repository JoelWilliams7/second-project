import "./App.css";
import desktop from "./assets/image-product-desktop.jpg";
import carticon from "./assets/icon-cart.svg";

function App() {
  return (
    <body>
      <div className="first-layout">
        <img src={desktop} alt="" />
      </div>
      <div className="second-layout">
        <h1>P E R F U M E</h1>
        <div className="second-title">Gabrielle Essence Eau De Perfum</div>
        <p>
          A floral, solar and voluptous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <h2>
          $149.99 <span>$169.99</span>
        </h2>
        <button className="button-style">
          <img src={carticon} alt="" />
          Add to Cart
        </button>
      </div>
    </body>
  );
}

export default App;

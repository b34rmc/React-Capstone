import { useCart } from "./CartProvider";

import "../../styles/Cart.scss";
export default function CartPage() {
  const { cart, getTotal } = useCart();

  const successMessage = () => {};

  return (
    <div className="cart-container">
      <div className="checkout-info">
        <h1>Checkout</h1>
        <h1>Total: ${getTotal()}</h1>
      </div>
      {cart.length > 0 ? (
        <>
          {cart.map((product) => {
            return (
              <div key={product.id} className="checkout-items">
                <div
                  className="img-container"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div className="info-container">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            );
          })}
          <button onClick={() => successMessage()}>
            Check Out: ${getTotal()}
          </button>
        </>
      ) : (
        <h1>No products in cart</h1>
      )}
    </div>
  );
}

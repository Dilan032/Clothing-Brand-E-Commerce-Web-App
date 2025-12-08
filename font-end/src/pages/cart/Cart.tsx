import { NavLink } from "react-router-dom";

const Cart = () => {

  const cartItems = [
    {
      id: 1,
      name: "Men's T-Shirt",
      price: 2500,
      qty: 2,
      image:
        "https://th.bing.com/th/id/OIP.cR2xZf-X8_s0PfhukQssygHaJo?w=182&h=237&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      size: "L",
    },
    {
      id: 2,
      name: "Women's Dress",
      price: 4500,
      qty: 1,
      image:
        "https://th.bing.com/th/id/OIP.PNuCePmeYCqlZ9K1_F5U_gHaGq?w=182&h=164&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      size: "M",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-4">
      <h3 className="mb-4">Shopping Cart</h3>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h5>Your cart is empty</h5>
          <p className="text-muted">Browse products and add your favourite items to the cart.</p>
          <a href="/" className="btn btn-primary">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center mb-3 pb-3 border-bottom"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />

                    <div className="ms-3 flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="mb-1 text-muted">
                        Size: {item.size} &nbsp;|&nbsp; Rs {item.price}
                      </p>

                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="bi bi-dash"></i>
                        </button>
                        <span>{item.qty}</span>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="bi bi-plus"></i>
                        </button>

                        <button className="btn btn-sm btn-outline-danger ms-3">
                          <i className="bi bi-trash"></i> Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0 fw-bold">Rs {item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span>Rs {subtotal}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Shipping</span>
                  <span>Free</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold">Rs {total}</span>
                </div>

                <NavLink className="btn btn-success w-100 mb-2" to="/checkout">
                   Proceed to Checkout
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

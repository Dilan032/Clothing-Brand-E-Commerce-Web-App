import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();

  const cartItems = [
    { id: 1, name: "Men's T-Shirt", price: 2500, qty: 2 },
    { id: 2, name: "Women's Dress", price: 4500, qty: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-4">
      <h3 className="mb-4">Checkout</h3>

      <div className="row">
        {/* LEFT: SHIPPING FORM */}
        <div className="col-lg-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Shipping Details</h5>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" required/>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" placeholder="0771234567" required/>
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" placeholder="123 Main Street" required/>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="Colombo" required/>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Postal Code</label>
                  <input type="text" className="form-control" placeholder="10000" required/>
                </div>
              </div>

              <button className="btn btn-success w-100 mt-2">
                Update address
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Order Summary</h5>

              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.name} × {item.qty}</span>
                  <span>Rs {item.price * item.qty}</span>
                </div>
              ))}

              <hr />

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

              <button className="btn btn-primary w-100" onClick={() => navigate("/payment")}>
                Continue to Payment
              </button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

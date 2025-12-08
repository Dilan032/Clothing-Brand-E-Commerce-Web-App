import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">Payment</h3>

      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Select Payment Method</h5>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  value="card"
                  onChange={(e) => setMethod(e.target.value)}
                />
                <label className="form-check-label">Credit / Debit Card</label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  value="cod"
                  onChange={(e) => setMethod(e.target.value)}
                />
                <label className="form-check-label">Cash on Delivery</label>
              </div>

              <button className="btn btn-success w-100" 
                onClick={handlePayment}
              >
                Confirm Payment
              </button>

              <button
                className="btn btn-outline-secondary w-100 mt-2"
                onClick={() => navigate("/checkout")}
              >
                Back to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

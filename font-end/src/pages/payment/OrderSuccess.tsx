import { useParams, Link } from "react-router-dom";

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <div className="container py-5 text-center">
      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <div className="text-success" style={{ fontSize: "60px" }}>
          <i className="bi bi-check-circle-fill"></i>
        </div>

        <h3 className="mt-3">Order Placed Successfully!</h3>
        <p className="text-muted">Your order has been confirmed.</p>

        <h5 className="mt-3">Order ID:</h5>
        <p className="fw-bold">{orderId}</p>

        <p className="text-muted">A confirmation email has been sent.</p>

        <Link to="/home" className="btn btn-primary w-100 mt-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;

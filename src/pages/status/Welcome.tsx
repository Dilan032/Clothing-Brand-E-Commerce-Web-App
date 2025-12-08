import { NavLink } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-bg d-flex align-items-center justify-content-end text-end vh-100">
      
      <div className="welcome-content me-5">
        <h1 className="display-3 fw-bold mb-3">
          Welcome to <span className="text-primary">Clothora</span>
        </h1>

        <div className="align-items-center justify-content-center text-center">
          <p className="lead mb-4">
          Discover the latest trends in fashion and style. <br />
          Elevate your wardrobe with our premium clothing collection.
        </p>

          <NavLink to="/home" className="btn btn-success btn-lg me-3">
            Browse Store
          </NavLink>

          <NavLink to="/register" className="btn btn-primary btn-lg me-3">
            Get Started
          </NavLink>

          <NavLink to="/login" className="btn btn-outline-primary btn-lg">
            Login
          </NavLink>
          
        </div>
      </div>

    </div>
  );
};

export default Welcome;

// import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-page d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-light">
      {/* Title */}
      <h1 className="display-3 fw-bold mb-3">
        Welcome to <span className="text-primary">Clothora</span>
      </h1>

      <p className="lead mb-4">
        Discover the latest trends in fashion and style. <br />
        Elevate your wardrobe with our premium clothing collection.
      </p>

      <div>
        <NavLink to="/register" className="btn btn-primary btn-lg me-3">
          Get Started
        </NavLink>
        <NavLink to="/login" className="btn btn-outline-primary btn-lg">
          Login
        </NavLink>
      </div>

    </div>
  );
};

export default Welcome;

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand d-flex flex-column align-items-start fs-1" to="/">
          <div className="d-flex align-items-center">
            <i className="bi bi-strava fs-1 text-primary me-2"></i>
            <span style={{ color: "black", fontWeight: "700" }}>Clothora</span>
          </div>
        </NavLink>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

          {/* NavLinks aligned to right */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className="nav-link fw-semibold" 
                to="/" 
                style={({ isActive }) => ({ color: isActive ? "#0d6efd" : "black" })}
              >
                Welcome
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link fw-semibold" 
                to="/login" 
                style={({ isActive }) => ({ color: isActive ? "#0d6efd" : "black" })}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link fw-semibold" 
                to="/register" 
                style={({ isActive }) => ({ color: isActive ? "#0d6efd" : "black" })}
              >
                Register
              </NavLink>
            </li>
          </ul>

          {/* Profile Dropdown */}
          <ul className="navbar-nav ms-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-circle fs-4"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                </li>
                <li>
                  <button className="dropdown-item">Logout</button>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const NavBar = () => {
  const params = useParams();
  const location = useLocation();
  return (
    <nav className="navbar glass  p-3 rounded-0">
      <div className="container d-flex justify-content-between">
        <span className="navbar-brand mb-0 fw-bold"> Contact Agenda</span>
        <div className="d-flex gap-3">
          {location.pathname === "/" ? (
            <Link to="/contact">
              <button className="btn btn-success ">Create contact</button>
            </Link>
          ) : (
            <Link to="/">
              <button className="btn btn-success ">Return to list</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

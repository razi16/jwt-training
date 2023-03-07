import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const logOut = (e) => {
    localStorage.removeItem("x-access-token");
    setLogin(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("x-access-token");
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav fixed-right">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {login ? (
            <li>
              <button className="btn btn-default btn-danger" onClick={logOut}>
                Logout
              </button>
            </li>
          ) : (
            <div></div>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

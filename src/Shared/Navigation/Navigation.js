import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
function Nav(props) {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/register");
  };
  return (
    <div className="container">
      <div className="logo">Dashboard </div>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {auth ? (
            <Link to="/register" onClick={handleLogout}>
              Log Out
            </Link>
          ) : (
            <Link to="/register">Sign Up</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Nav;

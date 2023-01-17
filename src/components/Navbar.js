import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="left">
        <div className="nav-item">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
      </div>
      <div className="right">
        <div className="nav-item">
          <NavLink exact to="/products">
            Products
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
    </div>
  );
}

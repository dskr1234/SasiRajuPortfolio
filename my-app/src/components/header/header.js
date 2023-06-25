import { Link } from "react-router-dom";

import "./header.css";

const Header = () => (
  <div className="nav-bar-container">
    <img
      src="https://t3.ftcdn.net/jpg/01/68/83/58/360_F_168835832_pujh5m15TaxwpJYMPoRpBMDqypt7nQES.jpg"
      alt="logo"
      className="logo"
    />
    <div className="nav-link-container">
      <Link to="/">
        <p className="nav-link">Home</p>
      </Link>
      <Link to="/about">
        <p className="nav-link">About</p>
      </Link>
      <Link to="/projects">
        <p className="nav-link">Projects</p>
      </Link>
     
    </div>
  </div>
);
export default Header;

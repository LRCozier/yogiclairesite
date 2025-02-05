import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
    <nav className="navbar">
      <div id="logo"><Link to="/">Yogi Claire</Link></div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
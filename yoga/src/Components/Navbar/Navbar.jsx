import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <div id="logo">
          <Link to="/" onClick={closeMenu}>Yogi Claire</Link>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/classes" onClick={closeMenu}>Classes</Link></li>
          <li><Link to="/retreats" onClick={closeMenu}>Retreats</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
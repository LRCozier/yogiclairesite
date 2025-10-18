import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <div className="navbar__logo">
          <Link to="/" onClick={closeMenu}>Yogi Claire</Link>
        </div>
        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul className={menuOpen ? "navbar__links navbar__links--open" : "navbar__links"}>
          <li className="navbar__item"><NavLink to="/about" className="navbar__link" onClick={closeMenu}>About</NavLink></li>
          <li className="navbar__item"><NavLink to="/classes" className="navbar__link" onClick={closeMenu}>Classes</NavLink></li>
          <li className="navbar__item"><NavLink to="/retreats" className="navbar__link" onClick={closeMenu}>Retreats</NavLink></li>
          <li className="navbar__item"><NavLink to="/yoga-in-education" className="navbar__link" onClick={closeMenu}>Education</NavLink></li>
          <li className="navbar__item"><NavLink to="/contact" className="navbar__link" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
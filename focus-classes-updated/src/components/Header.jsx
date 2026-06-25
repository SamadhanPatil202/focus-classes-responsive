import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [demoForm, setDemoForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleSave = async () => {
    if (!demoForm.name.trim()) {
      alert("Name is required");
      return;
    }
    if (!/^[0-9]{10}$/.test(demoForm.mobile)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }
    if (!demoForm.message.trim()) {
      alert("Message is required");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: demoForm.name,
          mobile: demoForm.mobile,
          message: demoForm.message,
          formType: "BOOK_DEMO",
        }),
      });
      if (response.ok) {
        setShowModal(false);
        setShowSuccess(true);
        setDemoForm({ name: "", mobile: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <header className="header">
        <div className="logo-box">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Focus Coaching Classes" className="logo" />
          </Link>
        </div>

        <nav className="nav-menu">
          <Link to="/">Home</Link>

          <div className="nav-item dropdown">
            <a href="#">About <FiChevronDown className="down-icon" /></a>
            <ul className="dropdown-menu">
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="nav-item dropdown">
            <Link to="/services">Courses <FiChevronDown className="down-icon" /></Link>
            <ul className="dropdown-menu course-dropdown">
              <li><Link to="/10th-cbse">10th CBSE Classes</Link></li>
              <li><Link to="/10th-ssc">10th SSC Classes</Link></li>
              <li><Link to="/9th-cbse">9th CBSE Classes</Link></li>
              <li><Link to="/9th-ssc">9th SSC Classes</Link></li>
              <li><Link to="/course">CBSE 10th Standard</Link></li>
              <li><Link to="/jee">JEE Classes</Link></li>
              <li><Link to="/mht-cet">MHT CET Classes</Link></li>
              <li><Link to="/neet">NEET Classes</Link></li>
            </ul>
          </div>

          <div className="nav-item dropdown">
            <a href="#">Resources <FiChevronDown className="down-icon" /></a>
            <ul className="dropdown-menu">
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/latestupdates">Latest Updates</Link></li>
            </ul>
          </div>

          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="header-right">
          <button className="demo-btn" onClick={() => setShowModal(true)}>
            Book Demo Class
          </button>
          <div className="divider"></div>
          <div className="phone-box">
            <span className="phone-circle">
              <Link to="tel:09920506327"><FiPhoneCall /></Link>
            </span>
            <span>09920506327</span>
          </div>
        </div>

        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          <button className="mobile-close-btn" onClick={closeMenu}><FiX /></button>
        </div>

        <nav className="mobile-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>

          <div className="mobile-dropdown">
            <button onClick={() => toggleDropdown("about")}>
              About <FiChevronDown className={`mob-down-icon ${openDropdown === "about" ? "rotated" : ""}`} />
            </button>
            {openDropdown === "about" && (
              <ul>
                <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              </ul>
            )}
          </div>

          <div className="mobile-dropdown">
            <button onClick={() => toggleDropdown("courses")}>
              Courses <FiChevronDown className={`mob-down-icon ${openDropdown === "courses" ? "rotated" : ""}`} />
            </button>
            {openDropdown === "courses" && (
              <ul>
                <li><Link to="/10th-cbse" onClick={closeMenu}>10th CBSE Classes</Link></li>
                <li><Link to="/10th-ssc" onClick={closeMenu}>10th SSC Classes</Link></li>
                <li><Link to="/9th-cbse" onClick={closeMenu}>9th CBSE Classes</Link></li>
                <li><Link to="/9th-ssc" onClick={closeMenu}>9th SSC Classes</Link></li>
                <li><Link to="/course" onClick={closeMenu}>CBSE 10th Standard</Link></li>
                <li><Link to="/jee" onClick={closeMenu}>JEE Classes</Link></li>
                <li><Link to="/mht-cet" onClick={closeMenu}>MHT CET Classes</Link></li>
                <li><Link to="/neet" onClick={closeMenu}>NEET Classes</Link></li>
              </ul>
            )}
          </div>

          <div className="mobile-dropdown">
            <button onClick={() => toggleDropdown("resources")}>
              Resources <FiChevronDown className={`mob-down-icon ${openDropdown === "resources" ? "rotated" : ""}`} />
            </button>
            {openDropdown === "resources" && (
              <ul>
                <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
                <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                <li><Link to="/latestupdates" onClick={closeMenu}>Latest Updates</Link></li>
              </ul>
            )}
          </div>

          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </nav>

        <div className="mobile-footer-actions">
          <button className="demo-btn-mobile" onClick={() => { setShowModal(true); closeMenu(); }}>
            Book Demo Class
          </button>
          <a href="tel:09920506327" className="mobile-phone-link">
            <FiPhoneCall /> 09920506327
          </a>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Book Demo Class</h2>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={demoForm.name}
                onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value.replace(/[0-9]/g, "") })}
              />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                value={demoForm.mobile}
                maxLength={10}
                onChange={(e) => setDemoForm({ ...demoForm, mobile: e.target.value.replace(/\D/g, "") })}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                value={demoForm.message}
                onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
              />
            </div>
            <div className="form-buttons">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="success-toast">
          Demo Class Request Submitted Successfully!
        </div>
      )}
    </>
  );
}

export default Header;